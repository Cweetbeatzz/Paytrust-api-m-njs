import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('banks')
@Controller('banks')
export class BanksController {}
