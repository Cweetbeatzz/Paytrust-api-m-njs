import { ApiProperty } from '@nestjs/swagger';

export class BankEntity {
  @ApiProperty({ example: 'GTB', description: 'The name of the bank' })
  bank: string;
  @ApiProperty({ example: '0233', description: 'The code of the bank' })
  code: string;

  @ApiProperty({
    example: '617276c3dfdf6dd54ce29a6c',
    description: 'The id of the Bank',
  })
  _id: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
