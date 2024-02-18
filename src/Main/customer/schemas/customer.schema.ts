import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ApiKey' })
  ApiKeyId: string;
  @Prop({ required: true })
  customerID: string;
  @Prop()
  customerName: string;
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  othername: string;
  @Prop()
  bvn: string;
  @Prop()
  dateOfBirth: Date;
  @Prop()
  email: string;
  @Prop()
  phone: Number;
  @Prop()
  startDateOfRelationship: Date;
  @Prop()
  status: string;
  @Prop()
  customerAddress: string;
  @Prop()
  street: string;
  @Prop()
  city: string;
  @Prop()
  country: string;
  @Prop()
  state: string;
  @Prop()
  postalcode: Number;
  @Prop()
  identity: string;
  @Prop()
  idNumber: string;
  @Prop()
  idType: string;
  @Prop()
  countryOfIssue: string;
  @Prop()
  expiryDate: Date;
  @Prop()
  image: string;
  @Prop()
  role: [string];
  @Prop()
  subscription_plan: string;
  @Prop()
  remainingRequests: Number;
  @Prop()
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
