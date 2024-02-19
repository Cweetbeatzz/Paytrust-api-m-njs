import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateFraudDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
