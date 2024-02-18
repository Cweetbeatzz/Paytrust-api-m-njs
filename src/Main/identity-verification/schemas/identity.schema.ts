import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';

export type IdentityDocument = HydratedDocument<Identity>;

@Schema()
export class Identity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Identity' })
  customerId: string;
  @Prop({ required: true })
  identity: string;
  @Prop({ required: true })
  idNumber: string;
  @Prop({ required: true })
  idType: string;
  @Prop({ required: true })
  countryOfIssue: string;
  @Prop({ required: true })
  expiryDate: Date;
  @Prop([String])
  image: string[];
}

export const IdentitySchema = SchemaFactory.createForClass(Identity);
