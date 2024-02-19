import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('fraud')
@Controller('fraud')
export class FraudController {}
