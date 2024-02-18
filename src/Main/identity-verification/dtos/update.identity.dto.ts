import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateIdentityDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  identity: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  idNumber: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  idType: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  countryOfIssue: string;
  @IsNotEmpty()
  @IsDate()
  expiryDate: Date;

  image: string[];
}
