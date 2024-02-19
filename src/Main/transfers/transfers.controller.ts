import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('transfers')
@Controller('transfers')
export class TransfersController {
  //########################################################################

  constructor() {}

  //########################################################################

  getAllTransactionsByCustomerId() {
    // filter by specific id transaction
    // filter by date range
  }
}
