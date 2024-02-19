import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@ApiTags('loans')
@Controller('loans')
export class LoansController {}
