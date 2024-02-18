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
  @IsNotEmpty()
  @IsString()
  customerID: string;
  @IsNotEmpty()
  @IsString()
  customerName: string;
  @IsNotEmpty()
  @IsString()
  firstname: string;
  @IsNotEmpty()
  @IsString()
  lastname: string;
  @IsNotEmpty()
  @IsString()
  othername: string;
  @IsNotEmpty()
  @IsNumber()
  bvn: string;
  @IsDate()
  dateOfBirth: Date;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: Number;
  @IsDate()
  startDateOfRelationship: Date;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @IsString()
  customerAddress: string;
  @IsNotEmpty()
  @IsString()
  street: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  postalcode: Number;
  @IsNotEmpty()
  @IsString()
  identity: string;
  @IsNotEmpty()
  @IsString()
  idNumber: string;
  @IsNotEmpty()
  @IsString()
  idType: string;
  @IsNotEmpty()
  @IsString()
  countryOfIssue: string;
  @IsNotEmpty()
  @IsDate()
  expiryDate: Date;
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsNotEmpty()
  @IsString()
  role: [string];
  @IsNotEmpty()
  @IsString()
  subscription_plan: string;
  @IsNotEmpty()
  @IsNumber()
  remainingRequests: Number;
  @IsNotEmpty()
  @IsString()
  password: string;
}
