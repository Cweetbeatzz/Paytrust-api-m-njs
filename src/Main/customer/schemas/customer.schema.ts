import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ApiKey' })
  ApiKeyId: string;
  @Prop({ required: true })
  customerID: string;
  @Prop({ required: true })
  customerName: string;
  @Prop({ required: true })
  firstname: string;
  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true })
  othername: string;
  @Prop({ required: true })
  bvn: string;
  @Prop({ type: Date, required: true })
  dateOfBirth: Date;
  @Prop({ type: String, required: true, unique: true })
  email: string;
  @Prop({ required: true })
  phone: Number;
  @Prop()
  startDateOfRelationship: Date;
  @Prop()
  status: string;
  @Prop({ required: true })
  customerAddress: string;
  @Prop({ required: true })
  street: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  country: string;
  @Prop({ required: true })
  state: string;
  @Prop({ required: true })
  postalcode: Number;
  @Prop()
  profilePicture: string;
  @Prop([String])
  roles: Role[];
  @Prop()
  subscription_plan: string;
  @Prop()
  remainingRequests: Number;
  @Prop({ required: true })
  password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
