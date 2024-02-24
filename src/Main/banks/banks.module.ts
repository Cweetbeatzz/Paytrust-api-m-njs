import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankService } from './banks.service';
import { Bank, BankSchema } from './schemas/banks.schema';
import { BankController } from './banks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bank.name, schema: BankSchema }]),
  ],
  controllers: [BankController],
  providers: [BankService],
  exports: [BankService],
})
export class BanksModule {}
