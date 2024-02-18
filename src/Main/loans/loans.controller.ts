import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('loans')
export class LoansController {}
