import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  id: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
