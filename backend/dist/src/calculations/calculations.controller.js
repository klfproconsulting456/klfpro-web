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
exports.CalculationsController = void 0;
const common_1 = require("@nestjs/common");
let CalculationsController = class CalculationsController {
    emi(dto) {
        const monthlyRate = dto.annualRate / (12 * 100);
        const emi = (dto.principal * monthlyRate * (1 + monthlyRate) ** dto.tenureMonths) /
            ((1 + monthlyRate) ** dto.tenureMonths - 1);
        return { emi: Number.isFinite(emi) ? Number(emi.toFixed(2)) : 0 };
    }
};
exports.CalculationsController = CalculationsController;
__decorate([
    (0, common_1.Post)("emi"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CalculationsController.prototype, "emi", null);
exports.CalculationsController = CalculationsController = __decorate([
    (0, common_1.Controller)("calculations")
], CalculationsController);
//# sourceMappingURL=calculations.controller.js.map