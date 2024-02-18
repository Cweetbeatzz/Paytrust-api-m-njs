import { Module } from '@nestjs/common';
import { IdentityVerificationService } from './identity-verification.service';
import { IdentityVerificationController } from './identity-verification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Identity, IdentitySchema } from './schemas/identity.schema';

@Module({
  providers: [IdentityVerificationService],
  controllers: [IdentityVerificationController],
  imports: [
    MongooseModule.forFeature([
      { name: Identity.name, schema: IdentitySchema },
    ]),
  ],

  exports: [IdentityVerificationService],
})
export class IdentityVerificationModule {}
