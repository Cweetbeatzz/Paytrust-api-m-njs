import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import { AccountController } from './account.controller';
import { BankService } from '../banks/banks.service';
import { CustomerService } from '../customer/customer.service';
import { BanksModule } from '../banks/banks.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    BanksModule,
    CustomerModule,
  ],

  exports: [AccountService],
})
export class AccountModule {}
