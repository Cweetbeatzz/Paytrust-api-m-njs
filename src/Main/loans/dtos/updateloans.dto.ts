import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateLoansDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
