import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('investments')
@Controller('investments')
export class InvestmentsController {}
