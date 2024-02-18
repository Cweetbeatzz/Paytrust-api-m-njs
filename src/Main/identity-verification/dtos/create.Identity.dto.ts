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

export class CreateIdentityDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  identity: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  idNumber: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  idType: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  countryOfIssue: string;
  @IsNotEmpty()
  @IsDate()
  expiryDate: Date;

  image: string[];
}
