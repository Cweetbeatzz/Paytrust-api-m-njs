import { Module } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service';
import { BeneficiariesController } from './beneficiaries.controller';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Beneficiaries,
  BeneficiariesSchema,
} from './schemas/beneficiaries.schema';

@Module({
  providers: [BeneficiariesService],
  controllers: [BeneficiariesController],
  imports: [
    MongooseModule.forFeature([
      { name: Beneficiaries.name, schema: BeneficiariesSchema },
    ]),
  ],

  exports: [BeneficiariesService],
})
export class BeneficiariesModule {}
