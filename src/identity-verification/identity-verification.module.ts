import { Module } from '@nestjs/common';
import { IdentityVerificationService } from './identity-verification.service';
import { IdentityVerificationController } from './identity-verification.controller';

@Module({
  providers: [IdentityVerificationService],
  controllers: [IdentityVerificationController]
})
export class IdentityVerificationModule {}
