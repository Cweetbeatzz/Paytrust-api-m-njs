import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {}
