import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type BeneficiariesDocument = HydratedDocument<Beneficiaries>;

@Schema()
export class Beneficiaries {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const BeneficiariesSchema = SchemaFactory.createForClass(Beneficiaries);
