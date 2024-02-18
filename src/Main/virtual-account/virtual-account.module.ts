import { Module } from '@nestjs/common';
import { VirtualAccountService } from './virtual-account.service';
import { VirtualAccountController } from './virtual-account.controller';

@Module({
  providers: [VirtualAccountService],
  controllers: [VirtualAccountController]
})
export class VirtualAccountModule {}
