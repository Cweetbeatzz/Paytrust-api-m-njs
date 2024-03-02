import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IS_INT,
  IsNumber,
  IsDate,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoansDto {
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
