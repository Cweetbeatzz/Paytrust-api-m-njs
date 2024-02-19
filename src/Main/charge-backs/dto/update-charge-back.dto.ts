import { PartialType } from '@nestjs/swagger';
import { CreateChargeBackDto } from './create-charge-back.dto';

export class UpdateChargeBackDto extends PartialType(CreateChargeBackDto) {}
