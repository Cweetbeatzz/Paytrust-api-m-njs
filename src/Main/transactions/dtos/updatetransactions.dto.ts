import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTransactionsDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
