import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { ApiForbiddenResponse, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';
import { Authorization } from 'src/decorators/authorization.decorator';
import { CreateVirtualCardsDto } from './dtos/createVirtualCards.dto';
import { UpdateVirtualCardsDto } from './dtos/updateVirtualCards.dto';
import { VirtualCards as VirtualCardsEntity } from './entities/virtualCards.entity';
import { VirtualCardsService } from './virtual-cards.service';
import { VirtualCards } from './schemas/virtualCards.schema';

@UseGuards(AuthGuard)
@ApiTags('virtual-cards')
@Controller('virtual-cards')
export class VirtualCardsController {
  constructor(private VirtualCardsService: VirtualCardsService) {}

  //   ############################################################

  @Post()
  async create(@Payload() data: CreateVirtualCardsDto) {
    console.log('data', data);

    return await this.VirtualCardsService.create(data);
  }
  //   ############################################################
  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'All the VirtualCardss',
    type: VirtualCardsEntity,
  })
  findAll(): Promise<VirtualCards[]> {
    return this.VirtualCardsService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @Authorization(true)
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A VirtualCards',
    type: VirtualCardsEntity,
  })
  findOne(@Param('id') id: string): Promise<VirtualCards> {
    return this.VirtualCardsService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateVirtualCardsDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: VirtualCardsEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateVirtualCardsDto: UpdateVirtualCardsDto,
  ): Promise<VirtualCards> {
    return this.VirtualCardsService.update(id, updateVirtualCardsDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: VirtualCardsEntity,
  })
  remove(@Param('id') id: string): Promise<VirtualCards> {
    return this.VirtualCardsService.remove(id);
  }
  //   ############################################################
}
