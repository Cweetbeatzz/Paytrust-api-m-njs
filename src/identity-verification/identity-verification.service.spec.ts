import { Test, TestingModule } from '@nestjs/testing';
import { IdentityVerificationService } from './identity-verification.service';

describe('IdentityVerificationService', () => {
  let service: IdentityVerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentityVerificationService],
    }).compile();

    service = module.get<IdentityVerificationService>(IdentityVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
