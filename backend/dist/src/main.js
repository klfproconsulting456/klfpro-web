"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.setGlobalPrefix("api");
    const origins = (process.env.FRONTEND_ORIGIN ?? "http://localhost:3000")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    app.enableCors({ origin: origins, credentials: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(process.env.PORT || 4000);
}
void bootstrap();
//# sourceMappingURL=main.js.map