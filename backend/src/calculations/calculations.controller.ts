import { Body, Controller, Post } from "@nestjs/common";

type EmiDto = {
  principal: number;
  annualRate: number;
  tenureMonths: number;
};

@Controller("calculations")
export class CalculationsController {
  @Post("emi")
  emi(@Body() dto: EmiDto) {
    const monthlyRate = dto.annualRate / (12 * 100);
    const emi =
      (dto.principal * monthlyRate * (1 + monthlyRate) ** dto.tenureMonths) /
      ((1 + monthlyRate) ** dto.tenureMonths - 1);

    return { emi: Number.isFinite(emi) ? Number(emi.toFixed(2)) : 0 };
  }
}
