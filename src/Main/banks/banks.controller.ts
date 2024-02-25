import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Authorization } from 'src/decorators/authorization.decorator';

import { CreateBankDto } from './dtos/createbanks.dto';
import { BankEntity } from './entities/banks.entity';
import { Bank } from './schemas/banks.schema';
import { UpdateBankDto } from './dtos/updatebanks.dto';
import { BankService } from './banks.service';
import { SkipThrottle } from '@nestjs/throttler';
@SkipThrottle()
@ApiTags('banks')
@ApiBearerAuth()
@Controller('banks')
export class BankController {
  constructor(private BankService: BankService) {}

  //   ############################################################
  @SkipThrottle({ default: false })
  @Post()
  async create(@Payload() data: CreateBankDto) {
    try {
      return await this.BankService.create(data);
    } catch (error) {
      return error;
    }
  }

  //   ############################################################
  @SkipThrottle({ default: false })
  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'All the Banks',
    type: BankEntity,
  })
  findAll(): Promise<Bank[]> {
    return this.BankService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @Authorization(true)
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A Bank',
    type: BankEntity,
  })
  findOne(@Param('id') id: string): Promise<Bank> {
    return this.BankService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateBankDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: BankEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateBankDto: UpdateBankDto,
  ): Promise<Bank> {
    return this.BankService.update(id, updateBankDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: BankEntity,
  })
  remove(@Param('id') id: string): Promise<Bank> {
    return this.BankService.remove(id);
  }
  //   ############################################################
}
