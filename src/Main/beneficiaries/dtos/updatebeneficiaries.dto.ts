import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateBeneficiariesDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
