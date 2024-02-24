import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type BankDocument = HydratedDocument<Bank>;

@Schema()
export class Bank {
  @Prop({ required: true })
  bank: string;
  @Prop({ required: true })
  code: string;
}

export const BankSchema = SchemaFactory.createForClass(Bank);
