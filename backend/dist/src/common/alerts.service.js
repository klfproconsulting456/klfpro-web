"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AlertsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsService = void 0;
const common_1 = require("@nestjs/common");
let AlertsService = AlertsService_1 = class AlertsService {
    constructor() {
        this.logger = new common_1.Logger(AlertsService_1.name);
    }
    async notifyAdmin(title, message, severity = 'INFO') {
        const alertMessage = `[${severity}] ${title} - ${message}`;
        if (severity === 'CRITICAL') {
            this.logger.error(alertMessage);
        }
        else if (severity === 'WARNING') {
            this.logger.warn(alertMessage);
        }
        else {
            this.logger.log(alertMessage);
        }
    }
    async checkSeoHealth() {
        this.logger.log("Checking SEO Health...");
    }
};
exports.AlertsService = AlertsService;
exports.AlertsService = AlertsService = AlertsService_1 = __decorate([
    (0, common_1.Injectable)()
], AlertsService);
//# sourceMappingURL=alerts.service.js.map