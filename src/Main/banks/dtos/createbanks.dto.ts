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

export class CreateBankDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'GTB',
    description: 'The name of the bank',
  })
  // @MaxLength(100)
  bank: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '2033',
    description: 'The code of the bank',
  })
  code: string;
}
