import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VirtualCards } from './entities/virtualCards.entity';
import { VirtualCardsSchema } from './schemas/virtualCards.schema';
import { VirtualCardsController } from './virtual-cards.controller';
import { VirtualCardsService } from './virtual-cards.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VirtualCards.name, schema: VirtualCardsSchema },
    ]),
  ],
  controllers: [VirtualCardsController],
  providers: [VirtualCardsService],
  exports: [VirtualCardsService],
})
export class VirtualCardsModule {}
