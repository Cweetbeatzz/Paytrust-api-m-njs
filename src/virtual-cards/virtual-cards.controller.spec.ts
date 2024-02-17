import { Test, TestingModule } from '@nestjs/testing';
import { VirtualCardsController } from './virtual-cards.controller';

describe('VirtualCardsController', () => {
  let controller: VirtualCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VirtualCardsController],
    }).compile();

    controller = module.get<VirtualCardsController>(VirtualCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
