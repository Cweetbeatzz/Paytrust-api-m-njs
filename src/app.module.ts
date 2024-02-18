import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './Main/account/account.controller';
import { AccountModule } from './Main/account/account.module';
import { AccountService } from './Main/account/account.service';
import { AuthController } from './Main/auth/auth.controller';
import { AuthModule } from './Main/auth/auth.module';
import { BanksController } from './Main/banks/banks.controller';
import { BanksModule } from './Main/banks/banks.module';
import { BanksService } from './Main/banks/banks.service';
import { BeneficiariesModule } from './Main/beneficiaries/beneficiaries.module';
import { BillPaymentsController } from './Main/bill-payments/bill-payments.controller';
import { BillPaymentsModule } from './Main/bill-payments/bill-payments.module';
import { BillPaymentsService } from './Main/bill-payments/bill-payments.service';
import { CustomerController } from './Main/customer/customer.controller';
import { CustomerModule } from './Main/customer/customer.module';
import { CustomerService } from './Main/customer/customer.service';
import { DisputesModule } from './Main/disputes/disputes.module';
import { DonationController } from './Main/donation/donation.controller';
import { DonationModule } from './Main/donation/donation.module';
import { DonationService } from './Main/donation/donation.service';
import { FraudController } from './Main/fraud/fraud.controller';
import { FraudModule } from './Main/fraud/fraud.module';
import { FraudService } from './Main/fraud/fraud.service';
import { IdentityVerificationModule } from './Main/identity-verification/identity-verification.module';
import { InvestmentsModule } from './Main/investments/investments.module';
import { LoansController } from './Main/loans/loans.controller';
import { LoansModule } from './Main/loans/loans.module';
import { LoansService } from './Main/loans/loans.service';
import { RolesModule } from './Main/roles/roles.module';
import { TransactionsController } from './Main/transactions/transactions.controller';
import { TransactionsModule } from './Main/transactions/transactions.module';
import { TransactionsService } from './Main/transactions/transactions.service';
import { TransfersModule } from './Main/transfers/transfers.module';
import { VirtualAccountModule } from './Main/virtual-account/virtual-account.module';
import { VirtualCardsController } from './Main/virtual-cards/virtual-cards.controller';
import { VirtualCardsModule } from './Main/virtual-cards/virtual-cards.module';
import { VirtualCardsService } from './Main/virtual-cards/virtual-cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI || 'mongodb://127.0.0.1/Paytrust-api-m-njs',
    ),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   port: 27017,
    //   username: 'root',
    //   password: 'root',
    //   database: 'Paytrust-api-m-njs',
    //   entities: [],
    //   synchronize: true,
    // }),
    AccountModule,
    CustomerModule,
    AuthModule,
    BanksModule,
    VirtualAccountModule,
    VirtualCardsModule,
    InvestmentsModule,
    LoansModule,
    TransfersModule,
    TransactionsModule,
    IdentityVerificationModule,
    FraudModule,
    DisputesModule,
    BillPaymentsModule,
    BeneficiariesModule,
    DonationModule,
    RolesModule,
  ],
  controllers: [
    AppController,
    AccountController,
    CustomerController,
    AuthController,
    BanksController,
    VirtualCardsController,
    LoansController,
    TransactionsController,
    FraudController,
    BillPaymentsController,
    DonationController,
  ],
  providers: [
    AppService,
    // AccountService,
    // CustomerService,
    // BanksService,
    // VirtualCardsService,
    // LoansService,
    // TransactionsService,
    // FraudService,
    // BillPaymentsService,
    // DonationService,
  ],
})
export class AppModule {}
