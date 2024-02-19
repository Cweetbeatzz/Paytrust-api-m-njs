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

export class CreateFraudDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
