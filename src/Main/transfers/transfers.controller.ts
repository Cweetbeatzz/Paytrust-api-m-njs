import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/Guard/auth.guard';

@UseGuards(AuthGuard)
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
