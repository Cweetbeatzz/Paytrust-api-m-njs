import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type BillpaymentDocument = HydratedDocument<Billpayment>;

@Schema()
export class Billpayment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const BillpaymentSchema = SchemaFactory.createForClass(Billpayment);
