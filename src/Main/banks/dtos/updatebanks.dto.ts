import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateBanksDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
