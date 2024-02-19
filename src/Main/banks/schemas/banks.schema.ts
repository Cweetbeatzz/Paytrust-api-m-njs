import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type VirtualAccDocument = HydratedDocument<VirtualAcc>;

@Schema()
export class VirtualAcc {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const VirtualAccSchema = SchemaFactory.createForClass(VirtualAcc);
