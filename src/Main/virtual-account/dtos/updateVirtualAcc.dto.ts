import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateVirtualAccDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  customerId: string;
}
