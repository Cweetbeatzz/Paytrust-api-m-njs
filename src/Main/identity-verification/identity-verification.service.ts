import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIdentityDto } from './dtos/create.Identity.dto';
import { UpdateIdentityDto } from './dtos/update.identity.dto';
import { Identity } from './schemas/identity.schema';

@Injectable()
export class IdentityVerificationService {
  constructor(
    @InjectModel(Identity.name) private IdentityModel: Model<Identity>,
  ) {}

  async create(createIdentityDto: CreateIdentityDto): Promise<Identity> {
    const newIdentity = new this.IdentityModel(createIdentityDto);
    return await newIdentity.save();
  }

  async findAll(): Promise<Identity[]> {
    return this.IdentityModel.find().exec();
  }

  async findOne(id: string): Promise<Identity> {
    return this.IdentityModel.findById(id);
  }

  async update(
    id: string,
    updateIdentityDto: UpdateIdentityDto,
  ): Promise<Identity> {
    return this.IdentityModel.findByIdAndUpdate(id, updateIdentityDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<Identity> {
    return this.IdentityModel.findByIdAndDelete(id);
  }
}
