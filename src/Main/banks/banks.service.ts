import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBankDto } from './dtos/createbanks.dto';
import { UpdateBankDto } from './dtos/updatebanks.dto';
import { Bank } from './schemas/banks.schema';

@Injectable()
export class BankService {
  constructor(@InjectModel(Bank.name) private BankModel: Model<Bank>) {}
  // ######################################################################

  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const newBank = new this.BankModel(createBankDto);
    return await newBank.save();
  }
  // ######################################################################

  async findAll(): Promise<Bank[]> {
    return this.BankModel.find().exec();
  }
  // ######################################################################

  async findOne(id: string): Promise<Bank> {
    return this.BankModel.findById(id);
  }
  // ######################################################################

  async update(id: string, updateBankDto: UpdateBankDto): Promise<Bank> {
    return this.BankModel.findByIdAndUpdate(id, updateBankDto, {
      new: true,
    });
  }
  // ######################################################################

  async remove(id: string): Promise<Bank> {
    return this.BankModel.findByIdAndDelete(id);
  }
}
