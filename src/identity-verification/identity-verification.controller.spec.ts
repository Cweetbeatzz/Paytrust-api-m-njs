import { Test, TestingModule } from '@nestjs/testing';
import { IdentityVerificationController } from './identity-verification.controller';

describe('IdentityVerificationController', () => {
  let controller: IdentityVerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdentityVerificationController],
    }).compile();

    controller = module.get<IdentityVerificationController>(IdentityVerificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
