import { Body, Controller, Post, UnauthorizedException, Res, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IsEmail, IsString } from "class-validator";
import { Request, Response } from "express";

class AuthDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() dto: AuthDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return this.authService.login(user);
  }

  @Post("seed-admin")
  async seedAdmin() {
    return this.authService.seedAdmin();
  }

  @Post("customer/send-otp")
  async sendOtp(@Body("phone") phone: string, @Req() req: Request) {
    if (!phone || phone.length < 10) throw new UnauthorizedException("Invalid phone number");
    const deviceInfo = req.headers["user-agent"];
    const ipAddress = req.ip;
    return this.authService.sendCustomerOtp(phone, ipAddress, deviceInfo);
  }

  @Post("customer/verify-otp")
  async verifyOtp(
    @Body("phone") phone: string, 
    @Body("otp") otp: string, 
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    if (!phone || !otp) throw new UnauthorizedException("Missing phone or OTP");
    
    const deviceInfo = req.headers["user-agent"];
    const ipAddress = req.ip;

    const result = await this.authService.verifyCustomerOtp(phone, otp, deviceInfo, ipAddress);

    // Set HTTP-only cookie for refresh token
    res.cookie('klfpro_refresh_token', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return {
      accessToken: result.accessToken,
      user: result.user
    };
  }

  @Post("customer/refresh")
  async refresh(@Req() req: Request) {
    const refreshToken = req.cookies?.klfpro_refresh_token;
    if (!refreshToken) throw new UnauthorizedException("No refresh token found");
    return this.authService.refreshCustomerToken(refreshToken, req.ip);
  }

  @Post("customer/logout")
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.klfpro_refresh_token;
    if (refreshToken) {
      await this.authService.logoutCustomer(refreshToken, req.ip);
    }
    res.clearCookie('klfpro_refresh_token');
    return { success: true };
  }
}
