import { ApiProperty } from '@nestjs/swagger';

export class Identity {
  @ApiProperty({ example: 'John', description: 'The identity of the Customer' })
  identity: string;

  @ApiProperty({
    example: 'B50001HHNJ',
    description: 'The idNumber of the id card',
  })
  idNumber: string;

  @ApiProperty({
    example: '617276c3dfdf6dd54ce29a6c',
    description: 'The id of the Identity',
  })
  customerId: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
