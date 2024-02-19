import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateVirtualCardsDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
