import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateLeadDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  phone!: string;

  @IsEmail()
  @MaxLength(255)
  email!: string;

  /** Must match `LoanType.slug` from seed (e.g. home-loan, business-loan). */
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  loanTypeSlug!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  message?: string;

  @IsOptional()
  monthlyIncome?: number;

  @IsOptional()
  @IsString()
  employmentType?: string;

  @IsOptional()
  existingEmi?: number;

  @IsOptional()
  loanAmount?: number;
}
