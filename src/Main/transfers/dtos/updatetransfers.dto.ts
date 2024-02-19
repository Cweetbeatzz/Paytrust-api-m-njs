import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTransfersDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
