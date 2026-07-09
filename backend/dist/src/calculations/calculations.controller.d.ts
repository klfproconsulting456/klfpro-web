type EmiDto = {
    principal: number;
    annualRate: number;
    tenureMonths: number;
};
export declare class CalculationsController {
    emi(dto: EmiDto): {
        emi: number;
    };
}
export {};
