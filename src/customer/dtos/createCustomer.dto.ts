import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    example: 'standard',
    description: 'The subscription plan title for the User',
  })
  SubscriptionPaymentId: string;

  @IsString()
  @ApiProperty({
    example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
    description: 'The Generatered Api Key for the User',
  })
  ApiKeyId: string;
  customerID: string;
  customerName: string;
  firstname: string;
  lastname: string;
  othername: string;
  bvn: string;
  dateOfBirth: Date;
  email: string;
  phone: Number;
  startDateOfRelationship: Date;
  status: string;
  customerAddress: string;
  street: string;
  city: string;
  country: string;
  state: string;
  postalcode: Number;
  identity: string;
  idNumber: string;
  idType: string;
  countryOfIssue: string;
  expiryDate: Date;
  image: string;
  role: [string];
  subscription_plan: string;
  remainingRequests: Number;
  password: string;
}
