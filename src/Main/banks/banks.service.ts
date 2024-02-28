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

  async create(createBankDto: CreateBankDto): Promise<any> {
    try {
      //create new acc
      const newBank = new this.BankModel({
        bank: createBankDto.bank,
        code: createBankDto.code,
      });
      //create complete
      const created = await newBank.save();

      return { message: 'success', data: created };
    } catch (error) {
      return { message: 'error', data: error };
    }
    // const newBank = new this.BankModel(createBankDto);
    // return await newBank.save();
  }
  // ######################################################################

  async findAll(): Promise<any> {
    const output = await this.BankModel.find({}).exec();

    return { message: 'success', data: output };
    // return this.BankModel.find().exec();
  }
  // ######################################################################

  async findOne(id: any): Promise<any> {
    const output = await this.BankModel.findOne(id);

    if (output == null) {
      return { message: 'No Bank Exist', data: {} };
    }

    return { message: 'success', data: output };
    // return this.BankModel.findById(id);
  }
  // ######################################################################

  async update(id: string, updateBankDto: UpdateBankDto): Promise<any> {
    const check: any = await this.findOne(id);

    if (check.data == null || !check.data) {
      return { message: 'No Bank Exist', data: {} };
    }

    let oldDetails = {
      code: updateBankDto.code == null || '' ? check.data.code : null,
      bank: updateBankDto.bank == null || '' ? check.data.bank : null,
    };

    const output = await this.BankModel.findByIdAndUpdate(id, {
      $set: oldDetails,
    });

    return { message: 'success', data: output };
    // return this.BankModel.findByIdAndUpdate(id, updateBankDto, {
    //   new: true,
    // });
  }
  // ######################################################################

  async remove(id: string): Promise<any> {
    const check: any = await this.findOne(id);

    if (check.data == null || !check.data) {
      return { message: 'No Bank Exist', data: {} };
    }
    const output = await this.BankModel.findByIdAndDelete(id);

    return { message: 'success', data: {} };
    // return this.BankModel.findByIdAndDelete(id);
  }
  // ######################################################################

  async searchBanks(bankCode): Promise<any> {
    const output = await this.BankModel.findOne(bankCode);

    if (output == null) {
      return { message: 'No Bank Exist', data: {} };
    }

    return { message: 'success', data: output };
  }
}
