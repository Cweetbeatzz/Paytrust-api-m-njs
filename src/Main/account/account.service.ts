import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private AccountModel: Model<AccountDocument>,
  ) {}
  // ######################################################################

  async getAll(): Promise<Account[]> {
    return this.AccountModel.find().exec();
  }
  // ######################################################################

  async getById(id: string): Promise<Account> {
    return this.AccountModel.findById(id);
  }
  // ######################################################################

  async create(AccountDto: CreateAccountDto): Promise<Account> {
    const newAccount = new this.AccountModel(AccountDto);

    return newAccount.save();
  }
  // ######################################################################

  async update(id: string, AccountDto: UpdateAccountDto): Promise<Account> {
    return this.AccountModel.findByIdAndUpdate(id, AccountDto, { new: true });
  }
  // ######################################################################

  async remove(id: string): Promise<Account> {
    return this.AccountModel.findByIdAndDelete(id);
  }
}
