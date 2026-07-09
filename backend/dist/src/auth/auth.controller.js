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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const class_validator_1 = require("class-validator");
class AuthDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(dto) {
        const user = await this.authService.validateUser(dto.email, dto.password);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        return this.authService.login(user);
    }
    async seedAdmin() {
        return this.authService.seedAdmin();
    }
    async sendOtp(phone, req) {
        if (!phone || phone.length < 10)
            throw new common_1.UnauthorizedException("Invalid phone number");
        const deviceInfo = req.headers["user-agent"];
        const ipAddress = req.ip;
        return this.authService.sendCustomerOtp(phone, ipAddress, deviceInfo);
    }
    async verifyOtp(phone, otp, req, res) {
        if (!phone || !otp)
            throw new common_1.UnauthorizedException("Missing phone or OTP");
        const deviceInfo = req.headers["user-agent"];
        const ipAddress = req.ip;
        const result = await this.authService.verifyCustomerOtp(phone, otp, deviceInfo, ipAddress);
        res.cookie('klfpro_refresh_token', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return {
            accessToken: result.accessToken,
            user: result.user
        };
    }
    async refresh(req) {
        const refreshToken = req.cookies?.klfpro_refresh_token;
        if (!refreshToken)
            throw new common_1.UnauthorizedException("No refresh token found");
        return this.authService.refreshCustomerToken(refreshToken, req.ip);
    }
    async logout(req, res) {
        const refreshToken = req.cookies?.klfpro_refresh_token;
        if (refreshToken) {
            await this.authService.logoutCustomer(refreshToken, req.ip);
        }
        res.clearCookie('klfpro_refresh_token');
        return { success: true };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("seed-admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "seedAdmin", null);
__decorate([
    (0, common_1.Post)("customer/send-otp"),
    __param(0, (0, common_1.Body)("phone")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendOtp", null);
__decorate([
    (0, common_1.Post)("customer/verify-otp"),
    __param(0, (0, common_1.Body)("phone")),
    __param(1, (0, common_1.Body)("otp")),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Post)("customer/refresh"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)("customer/logout"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map