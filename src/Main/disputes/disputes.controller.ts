import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('disputes')
@Controller('disputes')
export class DisputesController {}
