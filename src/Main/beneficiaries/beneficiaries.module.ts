import { Module } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service';
import { BeneficiariesController } from './beneficiaries.controller';

@Module({
  providers: [BeneficiariesService],
  controllers: [BeneficiariesController]
})
export class BeneficiariesModule {}
