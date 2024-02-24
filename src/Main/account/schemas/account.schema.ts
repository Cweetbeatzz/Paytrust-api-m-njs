import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop({ required: true })
  bankId: string;
  @Prop({ required: true })
  CustomerId: number;
  @Prop({ required: true })
  accountNumber: string;
  @Prop({ required: true })
  accountType: string;
  @Prop({ required: true })
  bookBalance: string;
  @Prop({ required: true })
  mainBalance: string;
  @Prop({ required: true })
  currency: string;
  @Prop()
  Description: string;
  @Prop({ required: true })
  NumberOfAccounts: string;
  @Prop()
  referenceId: string;
  // @Prop()
  // timestamps: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
