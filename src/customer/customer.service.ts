import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/createCustomer.dto';
import { Customer } from './schemas/customer.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCustomerDto } from './dtos/updateCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = new this.customerModel(createCustomerDto);
    return await newCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id);
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Customer> {
    return this.customerModel.findByIdAndDelete(id);
  }
}
