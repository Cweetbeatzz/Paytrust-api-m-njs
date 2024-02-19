import { Injectable } from '@nestjs/common';
import { CreateChargeBackDto } from './dto/create-charge-back.dto';
import { UpdateChargeBackDto } from './dto/update-charge-back.dto';

@Injectable()
export class ChargeBacksService {
  create(createChargeBackDto: CreateChargeBackDto) {
    return 'This action adds a new chargeBack';
  }

  findAll() {
    return `This action returns all chargeBacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargeBack`;
  }

  update(id: number, updateChargeBackDto: UpdateChargeBackDto) {
    return `This action updates a #${id} chargeBack`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargeBack`;
  }
}
