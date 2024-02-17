import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI || 'mongodb://localhost/nest',
    ),
    AccountModule,
    CustomerModule,
  ],
  controllers: [AppController, AccountController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
