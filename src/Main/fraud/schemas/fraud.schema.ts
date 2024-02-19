import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type FraudDocument = HydratedDocument<Fraud>;

@Schema()
export class Fraud {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const FraudSchema = SchemaFactory.createForClass(Fraud);
