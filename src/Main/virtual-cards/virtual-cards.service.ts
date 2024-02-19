import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVirtualCardsDto } from './dtos/createVirtualCards.dto';
import { UpdateVirtualCardsDto } from './dtos/updateVirtualCards.dto';
import { VirtualCards } from './entities/virtualCards.entity';

@Injectable()
export class VirtualCardsService {
  constructor(
    @InjectModel(VirtualCards.name)
    private VirtualCardsModel: Model<VirtualCards>,
  ) {}

  async create(
    createVirtualCardsDto: CreateVirtualCardsDto,
  ): Promise<VirtualCards> {
    const newVirtualCards = new this.VirtualCardsModel(createVirtualCardsDto);
    return await newVirtualCards.save();
  }

  async findAll(): Promise<VirtualCards[]> {
    return this.VirtualCardsModel.find().exec();
  }

  async findOne(id: string): Promise<VirtualCards> {
    return this.VirtualCardsModel.findById(id);
  }

  async update(
    id: string,
    updateVirtualCardsDto: UpdateVirtualCardsDto,
  ): Promise<VirtualCards> {
    return this.VirtualCardsModel.findByIdAndUpdate(id, updateVirtualCardsDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<VirtualCards> {
    return this.VirtualCardsModel.findByIdAndDelete(id);
  }
}
