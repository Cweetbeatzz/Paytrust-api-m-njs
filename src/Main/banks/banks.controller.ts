import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
  async create(@Body() createBankDto: CreateBankDto) {
    try {
      const result = await this.BankService.create(createBankDto);

      const data = result.data;
      const message = result.message;

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      // throw new Error('An error occurred while creating bank.');
      throw new HttpException(
        'An error occurred while creating the bank.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
  async findAll(): Promise<any> {
    try {
      const result = await this.BankService.findAll();

      const data = result.data;
      const message = result.message;

      return {
        statusCode: HttpStatus.OK,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      //  res.status(400).send(error);
      // throw new Error('An error occurred while retrieving banks.');
      throw new HttpException(
        'An error occurred while retrieving banks.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BankService.findAll();
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
  async findOne(@Param('id') id: string): Promise<any> {
    try {
      const result = await this.BankService.findOne(id);

      const data = result.data;
      const message = result.message;

      // console.log("data", data);
      // console.log("message", message);

      return {
        statusCode: HttpStatus.OK,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        'An error occurred while retrieving banks.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BankService.findOne(id);
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
  async update(
    @Param('id') id: string,
    @Body() updateBankDto: UpdateBankDto,
  ): Promise<any> {
    try {
      const result = await this.BankService.update(id, updateBankDto);

      const data = result.data;
      const message = result.message;

      // console.log("data", data);
      // console.log("message", message);

      return {
        statusCode: HttpStatus.OK,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        'An error occurred while retrieving banks.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BankService.update(id, updateBankDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: BankEntity,
  })
  async remove(@Param('id') id: string): Promise<any> {
    try {
      const result = await this.BankService.remove(id);

      const data = result.data;
      const message = result.message;

      // console.log("data", data);
      // console.log("message", message);

      return {
        statusCode: HttpStatus.OK,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        'An error occurred while retrieving banks.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BankService.remove(id);
  }
  //   ############################################################
}
