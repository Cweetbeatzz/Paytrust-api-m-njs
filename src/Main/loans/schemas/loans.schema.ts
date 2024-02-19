import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type LoansDocument = HydratedDocument<Loans>;

@Schema()
export class Loans {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const LoansSchema = SchemaFactory.createForClass(Loans);
