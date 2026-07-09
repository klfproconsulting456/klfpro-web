import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        fullName: user.fullName
      }
    };
  }

  async seedAdmin() {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@klfpro.in";
    const existing = await this.prisma.user.findUnique({ where: { email: adminEmail } });
    if (existing) {
      return { message: "Admin already exists", user: { id: existing.id, email: existing.email } };
    }
    const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123";
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const admin = await this.prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        fullName: "System Admin",
        role: "ADMIN"
      }
    });
    return { message: "Admin created successfully", user: { id: admin.id, email: admin.email } };
  }

  private async logSecurityEvent(phone: string, eventType: string, ipAddress?: string, deviceInfo?: string, riskScore: number = 0) {
    await this.prisma.securityLog.create({
      data: { phone, eventType, ipAddress, deviceInfo, riskScore }
    });
  }

  async sendCustomerOtp(phone: string, ipAddress?: string, deviceInfo?: string) {
    const existing = await this.prisma.otpStore.findUnique({ where: { phone } });
    
    if (existing) {
      if (existing.lockedUntil && existing.lockedUntil > new Date()) {
        await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 100);
        throw new UnauthorizedException("Account temporarily locked. Try again later.");
      }

      // Check failure count
      if (existing.attempts >= 5) {
        if (existing.attempts >= 10) {
          // 24 hour lock
          await this.prisma.otpStore.update({
            where: { phone },
            data: { lockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000) }
          });
          await this.logSecurityEvent(phone, "ACCOUNT_LOCKED", ipAddress, deviceInfo, 90);
          throw new UnauthorizedException("Too many failures. Account locked for 24 hours.");
        } else {
          // Progressive delay: 6 -> 30s, 7 -> 1m, 8 -> 5m, 9 -> 15m
          const delayMinutes = existing.attempts === 6 ? 0.5 : existing.attempts === 7 ? 1 : existing.attempts === 8 ? 5 : 15;
          const waitTime = new Date(existing.createdAt.getTime() + delayMinutes * 60 * 1000);
          if (waitTime > new Date()) {
            await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 50);
            throw new UnauthorizedException(`Please wait ${delayMinutes} minutes before trying again.`);
          }
        }
      }
    }

    const otp = "1234"; // In production: Math.floor(1000 + Math.random() * 9000).toString()
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    await this.prisma.otpStore.upsert({
      where: { phone },
      update: { otp, expiresAt },
      create: { phone, otp, expiresAt, attempts: 0 }
    });

    await this.logSecurityEvent(phone, "OTP_REQUESTED", ipAddress, deviceInfo, 10);
    return { success: true, message: "OTP sent successfully" };
  }

  async verifyCustomerOtp(phone: string, otp: string, deviceInfo?: string, ipAddress?: string) {
    const record = await this.prisma.otpStore.findUnique({ where: { phone } });
    if (!record) throw new UnauthorizedException("OTP not requested or expired");
    
    if (record.lockedUntil && record.lockedUntil > new Date()) {
      throw new UnauthorizedException("Account locked.");
    }

    if (record.expiresAt < new Date()) {
      await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 20);
      throw new UnauthorizedException("OTP expired");
    }

    if (record.otp !== otp) {
      await this.prisma.otpStore.update({ where: { phone }, data: { attempts: record.attempts + 1 } });
      await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 30);
      throw new UnauthorizedException("Invalid OTP");
    }

    // Success! Reset attempts.
    await this.prisma.otpStore.delete({ where: { phone } });
    await this.logSecurityEvent(phone, "OTP_VERIFIED", ipAddress, deviceInfo, 0);

    // Generate Tokens
    const payload = { sub: phone, phone, role: "CUSTOMER" };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    
    // Generate Refresh Token
    const refreshToken = require('crypto').randomBytes(40).toString('hex');
    const refreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await this.prisma.customerSession.create({
      data: {
        phone,
        refreshToken,
        deviceInfo,
        ipAddress,
        expiresAt: refreshExpiresAt
      }
    });

    return {
      accessToken,
      refreshToken,
      user: { phone, role: "CUSTOMER" }
    };
  }

  async refreshCustomerToken(refreshToken: string, ipAddress?: string) {
    const session = await this.prisma.customerSession.findUnique({ where: { refreshToken } });
    if (!session || session.expiresAt < new Date()) {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }

    const payload = { sub: session.phone, phone: session.phone, role: "CUSTOMER" };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });

    await this.logSecurityEvent(session.phone, "TOKEN_REFRESH", ipAddress, undefined, 0);

    return { accessToken };
  }

  async logoutCustomer(refreshToken: string, ipAddress?: string) {
    const session = await this.prisma.customerSession.findUnique({ where: { refreshToken } });
    if (session) {
      await this.logSecurityEvent(session.phone, "LOGOUT", ipAddress, undefined, 0);
      await this.prisma.customerSession.deleteMany({ where: { refreshToken } });
    }
    return { success: true };
  }
}
