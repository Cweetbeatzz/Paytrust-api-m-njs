import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateBankDto {
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
