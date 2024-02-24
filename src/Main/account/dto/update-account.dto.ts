import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAccountDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'John', description: 'The name of the Customer' })
  bankId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1387hbhejcnjecn',
    description: 'The Customer Id of the Customer',
  })
  CustomerId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1233554557578',
    description: 'The account Number of the Customer',
  })
  accountNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Savings',
    description: 'The account Type of the Customer',
  })
  accountType: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1500.00',
    description: 'The book Balance of the Customer',
  })
  bookBalance: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1520.00',
    description: 'The main Balance of the Customer',
  })
  mainBalance: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'USD',
    description: 'The address of the Customer',
  })
  currency: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'This account belongs to Mrs Davis',
    description: 'The Description of the Customer',
  })
  Description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '4',
    description: 'The Number Of Accounts of the Customer',
  })
  NumberOfAccounts: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '238938kc jkfc 3093203iddefe',
    description: 'The referenceId of the Customer',
  })
  referenceId: string;
}
