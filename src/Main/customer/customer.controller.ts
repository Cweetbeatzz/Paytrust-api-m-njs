import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ClientsModule,
  ClientProxy,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { CreateCustomerDto } from './dtos/createCustomer.dto';
import { UpdateCustomerDto } from './dtos/updateCustomer.dto';
import { CustomerService } from './customer.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { Customer } from './schemas/customer.schema';
import { Customer as CustomerEntity } from './entities/customer.entity';
import { SkipThrottle } from '@nestjs/throttler';
import { Authorization } from 'src/decorators/authorization.decorator';
import { parseDateOfBirth } from '../../helpers/dateHelper';

@ApiTags('customer')
@ApiBearerAuth()
@Controller('customer')
@SkipThrottle()
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  //   ############################################################

  @Post()
  async create(@Payload() data: CreateCustomerDto) {
    try {
      data.dateOfBirth = parseDateOfBirth(data.dateOfBirth.toString());
      data.startDateOfRelationship = parseDateOfBirth(
        data.startDateOfRelationship.toString(),
      );
      return await this.customerService.create(data);
    } catch (error) {
      return error;
    }
  }

  //   ############################################################
  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'All the customers',
    type: CustomerEntity,
  })
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @Authorization(true)
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A customer',
    type: CustomerEntity,
  })
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateCustomerDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: CustomerEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.update(id, updateCustomerDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: CustomerEntity,
  })
  remove(@Param('id') id: string): Promise<Customer> {
    return this.customerService.remove(id);
  }
  //   ############################################################
}
