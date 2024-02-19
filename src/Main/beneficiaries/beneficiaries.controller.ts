import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('beneficiaries')
@Controller('beneficiaries')
export class BeneficiariesController {}
