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
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  // @MaxLength(100)
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
  @ApiProperty({
    example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
    description: 'The Customer Id for the User',
  })
  customerID: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'DavisMartins',
    description: 'customers username',
  })
  customerName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Davis',
    description: 'customers first name',
  })
  firstname: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Martins',
    description: 'customers last name',
  })
  lastname: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Martha',
    description: 'customers other names',
  })
  othername: string;

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '29/2/1995',
    description: 'customers date of birth',
  })
  dateOfBirth: Date;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'davis.martha@gmail.com',
    description: 'Customers email',
  })
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({
    example: '+23467890889',
    description: 'Customers phone',
  })
  phone: Number;

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '29/2/1995',
    description: 'customers day of opening account',
  })
  startDateOfRelationship: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'pending',
    description: 'Customers status of account',
  })
  status: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '20 Ikeja Lagos Nigeria',
    description: 'Customers address',
  })
  customerAddress: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'st Johns street',
    description: 'Customers stree',
  })
  street: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Lagos',
    description: 'Customers city',
  })
  city: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Nigeria',
    description: 'Customers country',
  })
  country: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Lagos',
    description: 'Customers state',
  })
  state: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: '100284',
    description: 'Customers postal code',
  })
  postalcode: Number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'gc whijc iokncoi cj i2h kj d',
    description: 'Customers image',
  })
  image: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'admin',
    description: 'Customers role',
  })
  role: [string];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'standard',
    description: 'Customers subscvription plan',
  })
  subscription_plan: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: '56',
    description: 'Customers remaining Requests ',
  })
  remainingRequests: Number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '1222-IH-HCWB2-2-H23-DJ-EJH-CHJWCB-W',
    description: 'customers password',
  })
  password: string;
}
