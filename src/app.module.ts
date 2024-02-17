import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BanksController } from './banks/banks.controller';
import { BanksService } from './banks/banks.service';
import { BanksModule } from './banks/banks.module';
import { VirtualAccountModule } from './virtual-account/virtual-account.module';
import { VirtualCardsController } from './virtual-cards/virtual-cards.controller';
import { VirtualCardsService } from './virtual-cards/virtual-cards.service';
import { VirtualCardsModule } from './virtual-cards/virtual-cards.module';
import { InvestmentsModule } from './investments/investments.module';
import { LoansController } from './loans/loans.controller';
import { LoansService } from './loans/loans.service';
import { RolesModule } from './roles/roles.module';
import { DonationModule } from './donation/donation.module';
import { DonationService } from './donation/donation.service';
import { DonationController } from './donation/donation.controller';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { BillPaymentsModule } from './bill-payments/bill-payments.module';
import { BillPaymentsService } from './bill-payments/bill-payments.service';
import { BillPaymentsController } from './bill-payments/bill-payments.controller';
import { DisputesModule } from './disputes/disputes.module';
import { FraudModule } from './fraud/fraud.module';
import { FraudService } from './fraud/fraud.service';
import { FraudController } from './fraud/fraud.controller';
import { IdentityVerificationModule } from './identity-verification/identity-verification.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';
import { TransfersModule } from './transfers/transfers.module';
import { LoansModule } from './loans/loans.module';
import { LoansService } from './loans/loans.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI || 'mongodb://localhost/nest',
    ),
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
  controllers: [AppController, AccountController, CustomerController, AuthController, BanksController, VirtualCardsController, LoansController, TransactionsController, FraudController, BillPaymentsController, DonationController],
  providers: [AppService, CustomerService, BanksService, VirtualCardsService, LoansService, TransactionsService, FraudService, BillPaymentsService, DonationService],
})
export class AppModule {}
