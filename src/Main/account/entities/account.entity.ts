import { ApiProperty } from '@nestjs/swagger';

export class AccountEntity {
  @ApiProperty({
    example: '1387hbhejcnjecn',
    description: 'The name of the Customer',
  })
  bankId: string;

  @ApiProperty({
    example: '1387hbhejcnjecn',
    description: 'The Customer Id of the Customer',
  })
  CustomerId: string;

  @ApiProperty({
    example: '1233554557578',
    description: 'The account Number of the Customer',
  })
  accountNumber: string;

  @ApiProperty({
    example: 'Savings',
    description: 'The account Type of the Customer',
  })
  accountType: string;

  @ApiProperty({
    example: '1500.00',
    description: 'The book Balance of the Customer',
  })
  bookBalance: string;

  @ApiProperty({
    example: '1520.00',
    description: 'The main Balance of the Customer',
  })
  mainBalance: string;

  @ApiProperty({
    example: 'USD',
    description: 'The address of the Customer',
  })
  currency: string;

  @ApiProperty({
    example: 'This account belongs to Mrs Davis',
    description: 'The Description of the Customer',
  })
  Description: string;

  @ApiProperty({
    example: '4',
    description: 'The Number Of Accounts of the Customer',
  })
  NumberOfAccounts: string;

  @ApiProperty({
    example: '238938kc jkfc 3093203iddefe',
    description: 'The referenceId of the Customer',
  })
  referenceId: string;

  @ApiProperty({
    example: '617276c3dfdf6dd54ce29a6c',
    description: 'The id of the Account',
  })
  _id: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
