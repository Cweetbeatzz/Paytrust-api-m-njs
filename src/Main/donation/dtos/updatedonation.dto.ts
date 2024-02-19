import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateDonationDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
