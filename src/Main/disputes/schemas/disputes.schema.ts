import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type DisputesDocument = HydratedDocument<Disputes>;

@Schema()
export class Disputes {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const DisputesSchema = SchemaFactory.createForClass(Disputes);
