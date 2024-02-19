import { Module } from '@nestjs/common';
import { ChargeBacksService } from './charge-backs.service';
import { ChargeBacksController } from './charge-backs.controller';

@Module({
  controllers: [ChargeBacksController],
  providers: [ChargeBacksService],
})
export class ChargeBacksModule {}
