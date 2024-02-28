import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Beneficiaries } from './schemas/beneficiaries.schema';

@Injectable()
export class BeneficiariesService {
  constructor(
    @InjectModel(Beneficiaries.name)
    private beneficiariesModel: Model<Beneficiaries>,
  ) {}

  //#######################################################

  async createBeneficiaries(...args) {
    //create new acc
    const newBeneficiaries = new this.beneficiariesModel({
      ...args,
    });
    //create complete
    const created = await newBeneficiaries.save();

    return { message: 'success', data: created };
  }

  //#######################################################

  async getBeneficiarieses() {
    const output = await this.beneficiariesModel.find({});

    return { message: 'success', data: output };
  }

  //#######################################################

  async getBeneficiariesById(id) {
    const output = await this.beneficiariesModel.findById(id);

    if (output == null) {
      return { message: 'No Beneficiaries Exist', data: {} };
    }

    return { message: 'success', data: output };
  }
  //#######################################################

  async editBeneficiariesById(id, ...args) {
    const check = await this.getBeneficiariesById(id);

    if (check.data == null || !check.data) {
      return { message: 'No Beneficiaries Exist', data: {} };
    }

    let oldDetails = {
      ...args,
    };

    const output = await this.beneficiariesModel.findByIdAndUpdate(id, {
      $set: oldDetails,
    });

    return { message: 'success', data: output };
  }

  //#######################################################

  async deleteBeneficiariesById(id) {
    const check = await this.getBeneficiariesById(id);

    if (check.data == null || !check.data) {
      return { message: 'No Beneficiaries Exist', data: {} };
    }
    const output = await this.beneficiariesModel.findByIdAndDelete(id);

    return { message: 'success', data: {} };
  }

  //#######################################################

  async searchBeneficiaries(beneId) {
    const output = await this.beneficiariesModel.findOne(beneId);

    if (output == null) {
      return { message: 'No Beneficiaries Exist', data: {} };
    }

    return { message: 'success', data: output };
  }
  //#######################################################
}
