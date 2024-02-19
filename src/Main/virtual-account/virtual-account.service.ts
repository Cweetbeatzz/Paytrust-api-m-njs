import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVirtualAccDto } from './dtos/createVirtualAcc.dto';
import { UpdateVirtualAccDto } from './dtos/updateVirtualAcc.dto';
import { VirtualAcc } from './entities/virtualAcc.entity';

@Injectable()
export class VirtualAccountService {
  constructor(
    @InjectModel(VirtualAcc.name) private VirtualAccModel: Model<VirtualAcc>,
  ) {}

  async create(createVirtualAccDto: CreateVirtualAccDto): Promise<VirtualAcc> {
    const newVirtualAcc = new this.VirtualAccModel(createVirtualAccDto);
    return await newVirtualAcc.save();
  }

  async findAll(): Promise<VirtualAcc[]> {
    return this.VirtualAccModel.find().exec();
  }

  async findOne(id: string): Promise<VirtualAcc> {
    return this.VirtualAccModel.findById(id);
  }

  async update(
    id: string,
    updateVirtualAccDto: UpdateVirtualAccDto,
  ): Promise<VirtualAcc> {
    return this.VirtualAccModel.findByIdAndUpdate(id, updateVirtualAccDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<VirtualAcc> {
    return this.VirtualAccModel.findByIdAndDelete(id);
  }
}
