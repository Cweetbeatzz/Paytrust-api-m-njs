import { Module } from '@nestjs/common';
import { VirtualAccountService } from './virtual-account.service';
import { VirtualAccountController } from './virtual-account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VirtualAcc } from './entities/virtualAcc.entity';
import { VirtualAccSchema } from './schemas/virtualAcc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VirtualAcc.name, schema: VirtualAccSchema },
    ]),
  ],
  controllers: [VirtualAccountController],
  providers: [VirtualAccountService],
  exports: [VirtualAccountService],
})
export class VirtualAccountModule {}
