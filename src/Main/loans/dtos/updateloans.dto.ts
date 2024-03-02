import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateLoansDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  interestRate: number; // Assuming a simple interest rate for demonstration

  @IsNotEmpty()
  duration: number; // Duration of the loan in months

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  isActive: boolean;
}
