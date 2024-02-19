import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargeBacksService } from './charge-backs.service';
import { CreateChargeBackDto } from './dto/create-charge-back.dto';
import { UpdateChargeBackDto } from './dto/update-charge-back.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('charge-backs')
@Controller('charge-backs')
export class ChargeBacksController {
  constructor(private readonly chargeBacksService: ChargeBacksService) {}

  @Post()
  create(@Body() createChargeBackDto: CreateChargeBackDto) {
    return this.chargeBacksService.create(createChargeBackDto);
  }

  @Get()
  findAll() {
    return this.chargeBacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargeBacksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChargeBackDto: UpdateChargeBackDto,
  ) {
    return this.chargeBacksService.update(+id, updateChargeBackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargeBacksService.remove(+id);
  }
}
