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
import { CreateVirtualAccDto } from './dtos/createVirtualAcc.dto';
import { UpdateVirtualAccDto } from './dtos/updateVirtualAcc.dto';
import { VirtualAcc as VirtualAccEntity } from './entities/virtualAcc.entity';
import { VirtualAccountService } from './virtual-account.service';
import { VirtualAcc } from './schemas/virtualAcc.schema';

@UseGuards(AuthGuard)
@ApiTags('virtual-account')
@Controller('virtual-account')
export class VirtualAccountController {
  constructor(private VirtualAccService: VirtualAccountService) {}

  //   ############################################################

  @Post()
  async create(@Payload() data: CreateVirtualAccDto) {
    console.log('data', data);

    return await this.VirtualAccService.create(data);
  }
  //   ############################################################
  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'All the VirtualAccs',
    type: VirtualAccEntity,
  })
  findAll(): Promise<VirtualAcc[]> {
    return this.VirtualAccService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @Authorization(true)
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A VirtualAcc',
    type: VirtualAccEntity,
  })
  findOne(@Param('id') id: string): Promise<VirtualAcc> {
    return this.VirtualAccService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateVirtualAccDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: VirtualAccEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateVirtualAccDto: UpdateVirtualAccDto,
  ): Promise<VirtualAcc> {
    return this.VirtualAccService.update(id, updateVirtualAccDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: VirtualAccEntity,
  })
  remove(@Param('id') id: string): Promise<VirtualAcc> {
    return this.VirtualAccService.remove(id);
  }
  //   ############################################################
}
