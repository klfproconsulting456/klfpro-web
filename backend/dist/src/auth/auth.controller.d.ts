import { AuthService } from "./auth.service";
import { Request, Response } from "express";
declare class AuthDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<{
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
    sendOtp(phone: string, req: Request): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyOtp(phone: string, otp: string, req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
            phone: string;
            role: string;
        };
    }>;
    refresh(req: Request): Promise<{
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<{
        success: boolean;
    }>;
}
export {};
