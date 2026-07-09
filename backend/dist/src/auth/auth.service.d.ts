import { PrismaService } from "../common/prisma.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
        user: {
            id: any;
            email: any;
            role: any;
            fullName: any;
        };
    }>;
    seedAdmin(): Promise<{
        message: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    private logSecurityEvent;
    sendCustomerOtp(phone: string, ipAddress?: string, deviceInfo?: string): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyCustomerOtp(phone: string, otp: string, deviceInfo?: string, ipAddress?: string): Promise<{
        accessToken: string;
        refreshToken: any;
        user: {
            phone: string;
            role: string;
        };
    }>;
    refreshCustomerToken(refreshToken: string, ipAddress?: string): Promise<{
        accessToken: string;
    }>;
    logoutCustomer(refreshToken: string, ipAddress?: string): Promise<{
        success: boolean;
    }>;
}
