import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type VirtualCardsDocument = HydratedDocument<VirtualCards>;

@Schema()
export class VirtualCards {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const VirtualCardsSchema = SchemaFactory.createForClass(VirtualCards);
