import { Test, TestingModule } from '@nestjs/testing';
import { ChargeBacksService } from './charge-backs.service';

describe('ChargeBacksService', () => {
  let service: ChargeBacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargeBacksService],
    }).compile();

    service = module.get<ChargeBacksService>(ChargeBacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
