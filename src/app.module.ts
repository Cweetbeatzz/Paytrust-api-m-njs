import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI || 'mongodb://localhost/nest',
    ),
    AccountModule,
  ],
  controllers: [AppController, AccountController],
  providers: [AppService],
})
export class AppModule {}
