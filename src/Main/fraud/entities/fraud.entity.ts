import { ApiProperty } from '@nestjs/swagger';

export class Fraud {
  @ApiProperty({ example: 'John', description: 'The Id of the Customer' })
  customerId: string;

  @ApiProperty({
    example: '617276c3dfdf6dd54ce29a6c',
    description: 'The id of the Customer',
  })
  _id: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
