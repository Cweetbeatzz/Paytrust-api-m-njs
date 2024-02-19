import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bill-payments')
@Controller('bill-payments')
export class BillPaymentsController {}
