import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateDisputesDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
