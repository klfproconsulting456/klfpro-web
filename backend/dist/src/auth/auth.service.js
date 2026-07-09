"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
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
    async logSecurityEvent(phone, eventType, ipAddress, deviceInfo, riskScore = 0) {
        await this.prisma.securityLog.create({
            data: { phone, eventType, ipAddress, deviceInfo, riskScore }
        });
    }
    async sendCustomerOtp(phone, ipAddress, deviceInfo) {
        const existing = await this.prisma.otpStore.findUnique({ where: { phone } });
        if (existing) {
            if (existing.lockedUntil && existing.lockedUntil > new Date()) {
                await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 100);
                throw new common_1.UnauthorizedException("Account temporarily locked. Try again later.");
            }
            if (existing.attempts >= 5) {
                if (existing.attempts >= 10) {
                    await this.prisma.otpStore.update({
                        where: { phone },
                        data: { lockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000) }
                    });
                    await this.logSecurityEvent(phone, "ACCOUNT_LOCKED", ipAddress, deviceInfo, 90);
                    throw new common_1.UnauthorizedException("Too many failures. Account locked for 24 hours.");
                }
                else {
                    const delayMinutes = existing.attempts === 6 ? 0.5 : existing.attempts === 7 ? 1 : existing.attempts === 8 ? 5 : 15;
                    const waitTime = new Date(existing.createdAt.getTime() + delayMinutes * 60 * 1000);
                    if (waitTime > new Date()) {
                        await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 50);
                        throw new common_1.UnauthorizedException(`Please wait ${delayMinutes} minutes before trying again.`);
                    }
                }
            }
        }
        const otp = "1234";
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await this.prisma.otpStore.upsert({
            where: { phone },
            update: { otp, expiresAt },
            create: { phone, otp, expiresAt, attempts: 0 }
        });
        await this.logSecurityEvent(phone, "OTP_REQUESTED", ipAddress, deviceInfo, 10);
        return { success: true, message: "OTP sent successfully" };
    }
    async verifyCustomerOtp(phone, otp, deviceInfo, ipAddress) {
        const record = await this.prisma.otpStore.findUnique({ where: { phone } });
        if (!record)
            throw new common_1.UnauthorizedException("OTP not requested or expired");
        if (record.lockedUntil && record.lockedUntil > new Date()) {
            throw new common_1.UnauthorizedException("Account locked.");
        }
        if (record.expiresAt < new Date()) {
            await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 20);
            throw new common_1.UnauthorizedException("OTP expired");
        }
        if (record.otp !== otp) {
            await this.prisma.otpStore.update({ where: { phone }, data: { attempts: record.attempts + 1 } });
            await this.logSecurityEvent(phone, "OTP_FAILED", ipAddress, deviceInfo, 30);
            throw new common_1.UnauthorizedException("Invalid OTP");
        }
        await this.prisma.otpStore.delete({ where: { phone } });
        await this.logSecurityEvent(phone, "OTP_VERIFIED", ipAddress, deviceInfo, 0);
        const payload = { sub: phone, phone, role: "CUSTOMER" };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        const refreshToken = require('crypto').randomBytes(40).toString('hex');
        const refreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
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
    async refreshCustomerToken(refreshToken, ipAddress) {
        const session = await this.prisma.customerSession.findUnique({ where: { refreshToken } });
        if (!session || session.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException("Invalid or expired refresh token");
        }
        const payload = { sub: session.phone, phone: session.phone, role: "CUSTOMER" };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        await this.logSecurityEvent(session.phone, "TOKEN_REFRESH", ipAddress, undefined, 0);
        return { accessToken };
    }
    async logoutCustomer(refreshToken, ipAddress) {
        const session = await this.prisma.customerSession.findUnique({ where: { refreshToken } });
        if (session) {
            await this.logSecurityEvent(session.phone, "LOGOUT", ipAddress, undefined, 0);
            await this.prisma.customerSession.deleteMany({ where: { refreshToken } });
        }
        return { success: true };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map