import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type TransfersDocument = HydratedDocument<Transfers>;

@Schema()
export class Transfers {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const TransfersSchema = SchemaFactory.createForClass(Transfers);
