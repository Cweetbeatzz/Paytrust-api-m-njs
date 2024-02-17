import { Test, TestingModule } from '@nestjs/testing';
import { VirtualCardsService } from './virtual-cards.service';

describe('VirtualCardsService', () => {
  let service: VirtualCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VirtualCardsService],
    }).compile();

    service = module.get<VirtualCardsService>(VirtualCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
