import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './schemas/loans.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoansService {
  constructor(
    @InjectModel(Loan.name)
    private loanModel: Model<Loan>,
  ) {}

  async create(createLoanDto: any): Promise<Loan> {
    const loan = new this.loanModel(createLoanDto);
    return await loan.save();
  }

  findAll(): Promise<Loan[]> {
    return this.loanModel.find();
  }

  findOne(id: number): Promise<Loan> {
    return this.loanModel.findOne({ id });
  }
}
