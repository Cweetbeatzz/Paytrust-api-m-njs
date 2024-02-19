import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateBillpaymentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
