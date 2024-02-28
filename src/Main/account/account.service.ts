import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account, AccountDocument } from './schemas/account.schema';
import { BankService } from '../banks/banks.service';
import { GeneratedAccountId } from '../../helpers/GenerateUniqueIds';
import { GenerateAccNumCode } from '../../helpers/GenerateAccountNumber';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private AccountModel: Model<AccountDocument>,
    private bankService: BankService,
    private customerService: CustomerService,
  ) {}
  // ######################################################################

  async getAll(sort, limit, accountNumber): Promise<object> {
    let output: any = null;
    const objectQuery: any = {};

    if (sort) {
      objectQuery.accountNumber = accountNumber;
    }
    if (sort) {
      objectQuery.sort = sort;
    }

    if (limit) {
      objectQuery.limit = limit;
    }

    output = await this.AccountModel.find(objectQuery)
      .limit(objectQuery.limit)
      .sort({ timestamps: -1 })
      .select(objectQuery.accountNumber)
      .exec();
    // return this.AccountModel.find().exec();
    return { message: 'success', data: output, nbHits: output.length };
  }

  // async getAll2(sort, limit, accountNumber): Promise<object> {
  //   try {
  //     const queryConditions: any = {};
  //     let sortOption = { createdAt: -1 }; // Default sorting by createdAt field in descending order

  //     if (accountNumber) {
  //       // Assuming you want to filter by accountNumber
  //       queryConditions.accountNumber = accountNumber;
  //     }

  //     if (sort) {
  //       // Adjust based on how you're receiving the sort parameter
  //       // For example, if sort = 'name_asc', then:
  //       const [field, order] = sort.split('_');
  //       sortOption = { [field]: order === 'asc' ? 1 : -1 };
  //     }

  //     const query = this.AccountModel.find(queryConditions);
  //     if (limit) {
  //       query.limit(Number(limit)); // Ensure limit is a number
  //     }
  //     query.sort(sortOption); // Apply sorting

  //     const output = await query.exec(); // Execute the query

  //     return { message: 'success', data: output, nbHits: output.length };
  //   } catch (error) {
  //     console.error('Error fetching accounts:', error);
  //     throw error; // Or handle this error as needed
  //   }
  // }

  // ######################################################################

  async getById(id: string): Promise<any> {
    try {
      const output = await this.AccountModel.findById(id);

      if (output == null) {
        return { message: 'No Account Exist', data: {} };
      }

      return { message: 'success', data: output };
    } catch (error) {
      console.log('Data not found', error);
      // throw new APIError('Data not found', error);
    }
    // return this.AccountModel.findById(id);
  }
  // ######################################################################

  async create(AccountDto: CreateAccountDto): Promise<any> {
    let numOfAcc = 0;

    //get the bank user wants to open acc
    const getBankid: any = await this.bankService.findOne(AccountDto.bankId);
    //if bank exists
    if (!getBankid) {
      return { message: 'No Bank Exist' };
    }
    // get the user that wants to open acc
    const getUserid: any = await this.customerService.findOne(
      AccountDto.CustomerId,
    );
    //if the user exist
    if (!getUserid) {
      return { message: 'No User Exist' };
    }
    //search if users has any existing opened account
    const searchIfUserHasExistingAccountOfAnyType =
      await this.AccountModel.find(getUserid.data._id);
    //if account exists
    if (searchIfUserHasExistingAccountOfAnyType !== null) {
      numOfAcc++;
    }

    var accNum: any = GenerateAccNumCode;

    //if account number is not generated return error
    if (accNum <= 0) {
      return { message: 'Account Number Not Generated...' };
    }

    //? if (accNum === "alreadyExists") {
    //?   accNum = GenerateAccNumCode;
    //? }

    //create new acc
    const newAccount = new this.AccountModel({
      bankId: getBankid.data.code,
      CustomerId: getUserid.data._id,
      accountNumber: accNum,
      accountType: AccountDto.accountType,
      bookBalance: 0.0,
      mainBalance: 0.0,
      Description: AccountDto.Description,
      currency: AccountDto.currency ? 'NGN' : 'USD',
      // AccountStatus: AccountDto.status,
      referenceId: GeneratedAccountId,
      NumberOfAccounts: numOfAcc,
    });
    //create complete
    const created = await newAccount.save();
    // console.log('created', created);

    return { message: 'created', data: created };
    // const newAccount = new this.AccountModel(AccountDto);
    // return newAccount.save();
  }
  // ######################################################################

  async update(id: string, AccountDto: UpdateAccountDto): Promise<any> {
    const check = await this.getById(id);

    if (check.data == null || !check.data) {
      return { message: 'No Account Exist', data: {} };
    }

    let oldDetails = {
      bankId: check.data.bankId,
      CustomerId: check.data.userId,
      accType: AccountDto.accountType == null || '' ? check.data.accType : null,
      Desc:
        AccountDto.Description == null || '' ? check.data.Description : null,
      currency: AccountDto.currency == null || '' ? check.data._currency : null,
      bookBalance: check.data.bookBalance,
      mainBalance: check.data.mainBalance,
      AccountStatus: check.data.AccountStatus,
      NumberOfAccounts: check.data.NumberOfAccounts,
      accountNumber: check.data.accountNumber,
      referenceId: check.data.referenceId,
    };

    const output = await this.AccountModel.findByIdAndUpdate(id, {
      $set: oldDetails,
    });

    return { message: 'success', data: output };
    // return this.AccountModel.findByIdAndUpdate(id, AccountDto, { new: true });
  }
  // ######################################################################

  async remove(id: string): Promise<any> {
    const check = await this.getById(id);

    if (check.data == null || !check.data) {
      return { message: 'No Account Exist', data: {} };
    }
    const output = await this.AccountModel.findByIdAndDelete(id);

    return { message: 'success', data: {} };
    // return this.AccountModel.findByIdAndDelete(id);
  }

  async searchAccount(accNum: any) {
    let output = null;

    const objectQuery: any = {};

    if (accNum) {
      objectQuery.accNum = accNum;
    } else {
      return { message: 'No Account Exist', data: {} };
    }

    output = await this.AccountModel.find(objectQuery);

    if (output == null) {
      return { message: 'No Account Exist', data: {} };
    }

    return { message: 'success', data: output };
  }
  //#######################################################

  async activateAccountByCustomerId(id) {
    const check: any = await this.getById(id);

    if (check.data == null) {
      return { message: 'No Account Exist', data: {} };
    }

    let oldDetails = {
      bankId: check.data.bankId,
      CustomerId: check.data.userId,
      accType: check.data.accType,
      Desc: check.data.Description,
      currency: check.data._currency,
      bookBalance: check.data.bookBalance,
      mainBalance: check.data.mainBalance,
      AccountStatus: 'active',
      NumberOfAccounts: check.data.NumberOfAccounts,
      accountNumber: check.data.accountNumber,
      referenceId: check.data.referenceId,
    };

    const output = await this.AccountModel.findByIdAndUpdate(id, {
      $set: oldDetails,
    });

    return { message: 'success', data: output };
  }
  //#######################################################

  async deactivateAccountByCustomerId(id) {
    const check: any = await this.getById(id);

    if (check.data == null) {
      return { message: 'No Account Exist', data: {} };
    }

    let oldDetails = {
      bankId: check.data.bankId,
      CustomerId: check.data.userId,
      accType: check.data.accType,
      Desc: check.data.Description,
      currency: check.data._currency,
      bookBalance: check.data.bookBalance,
      mainBalance: check.data.mainBalance,
      AccountStatus: 'inactive',
      NumberOfAccounts: check.data.NumberOfAccounts,
      accountNumber: check.data.accountNumber,
      referenceId: check.data.referenceId,
    };

    const output = await this.AccountModel.findByIdAndUpdate(id, {
      $set: oldDetails,
    });

    return { message: 'success', data: output };
  }
}
