import { Test, TestingModule } from '@nestjs/testing';
import { ChargeBacksController } from './charge-backs.controller';
import { ChargeBacksService } from './charge-backs.service';

describe('ChargeBacksController', () => {
  let controller: ChargeBacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeBacksController],
      providers: [ChargeBacksService],
    }).compile();

    controller = module.get<ChargeBacksController>(ChargeBacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
