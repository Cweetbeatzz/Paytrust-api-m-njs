import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type DonationDocument = HydratedDocument<Donation>;

@Schema()
export class Donation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;
}

export const DonationSchema = SchemaFactory.createForClass(Donation);
