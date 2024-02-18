import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('transfers')
export class TransfersController {}
