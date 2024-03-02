import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Role } from 'src/Main/roles/role.enum';

export type LoansDocument = HydratedDocument<Loan>;

@Schema()
export class Loan {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customerId: string;

  @Prop()
  amount: number;

  @Prop()
  interestRate: number; // Assuming a simple interest rate for demonstration

  @Prop()
  duration: number; // Duration of the loan in months

  @Prop()
  startDate: Date;

  @Prop({ default: true })
  isActive: boolean;
}

export const LoansSchema = SchemaFactory.createForClass(Loan);
