import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({
    example: 'standard',
    description: 'The subscription plan title for the User',
  })
  SubscriptionPaymentId: string;

  @ApiProperty({
    example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
    description: 'The Generatered Api Key for the User',
  })
  ApiKeyId: string;

  @ApiProperty({
    example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
    description: 'The Customer Id for the User',
  })
  customerID: string;

  @ApiProperty({
    example: 'DavisMartins',
    description: 'customers username',
  })
  customerName: string;

  @ApiProperty({
    example: 'Davis',
    description: 'customers first name',
  })
  firstname: string;

  @ApiProperty({
    example: 'Martins',
    description: 'customers last name',
  })
  lastname: string;

  @ApiProperty({
    example: 'Martha',
    description: 'customers other names',
  })
  othername: string;

  @ApiProperty({
    example: '29/2/1995',
    description: 'customers date of birth',
  })
  dateOfBirth: Date;

  @ApiProperty({
    example: 'davis.martha@gmail.com',
    description: 'Customers email',
  })
  email: string;

  @ApiProperty({
    example: '+23467890889409',
    description: 'Customers phone',
  })
  phone: Number;

  @ApiProperty({
    example: '29/2/1995',
    description: 'customers day of opening account',
  })
  startDateOfRelationship: Date;

  @ApiProperty({
    example: 'pending',
    description: 'Customers status of account',
  })
  status: string;

  @ApiProperty({
    example: '20 Ikeja Lagos Nigeria',
    description: 'Customers address',
  })
  customerAddress: string;

  @ApiProperty({
    example: 'st Johns street',
    description: 'Customers stree',
  })
  street: string;

  @ApiProperty({
    example: 'Lagos',
    description: 'Customers city',
  })
  city: string;

  @ApiProperty({
    example: 'Nigeria',
    description: 'Customers country',
  })
  country: string;

  @ApiProperty({
    example: 'Lagos',
    description: 'Customers state',
  })
  state: string;

  @ApiProperty({
    example: '100284',
    description: 'Customers postal code',
  })
  postalcode: Number;

  @ApiProperty({
    example: 'gc whijc iokncoi cj i2h kj d',
    description: 'Customers image',
  })
  image: string;

  @ApiProperty({
    example: 'admin',
    description: 'Customers role',
  })
  role: [string];

  @ApiProperty({
    example: 'standard',
    description: 'Customers subscvription plan',
  })
  subscription_plan: string;

  @ApiProperty({
    example: '56',
    description: 'Customers remaining Requests ',
  })
  remainingRequests: Number;

  // @ApiProperty({
  //   example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
  //   description: 'customers password',
  // })
  // password: string;

  @ApiProperty({
    example: '617276c3dfdf6dd54ce29a6c',
    description: 'The id of the Customer',
  })
  _id: string;

  @ApiProperty({ example: 0, description: 'Version' })
  __v: number;
}
