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
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { Authorization } from 'src/decorators/authorization.decorator';
import { CreateBeneficiariesDto } from './dtos/createbeneficiaries.dto';
import { UpdateBeneficiariesDto } from './dtos/updatebeneficiaries.dto';
import { BeneficiariesService } from './beneficiaries.service';
import { BeneficiariesEntity } from './entities/beneficiaries.entity';

@ApiTags('beneficiaries')
@Controller('beneficiaries')
export class BeneficiariesController {
  constructor(private BeneficiariesService: BeneficiariesService) {}

  //   ############################################################
  @SkipThrottle({ default: false })
  @Post()
  async create(@Body() createBeneficiariesDto: CreateBeneficiariesDto) {
    try {
      const result = await this.BeneficiariesService.createBeneficiaries(
        createBeneficiariesDto,
      );

      const data = result.data;
      const message = result.message;

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      // throw new Error('An error occurred while creating Beneficiaries.');
      throw new HttpException(
        'An error occurred while creating the Beneficiaries.',
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
    description: 'All the Beneficiariess',
    type: BeneficiariesEntity,
  })
  async findAll(): Promise<any> {
    try {
      const result = await this.BeneficiariesService.getBeneficiarieses();

      const data = result.data;
      const message = result.message;

      return {
        statusCode: HttpStatus.OK,
        message: 'Successful',
        data: result,
      };
    } catch (error) {
      //  res.status(400).send(error);
      // throw new Error('An error occurred while retrieving Beneficiariess.');
      throw new HttpException(
        'An error occurred while retrieving Beneficiariess.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BeneficiariesService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @Authorization(true)
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A Beneficiaries',
    type: BeneficiariesEntity,
  })
  async findOne(@Param('id') id: string): Promise<any> {
    try {
      const result = await this.BeneficiariesService.getBeneficiariesById(id);

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
        'An error occurred while retrieving Beneficiaries.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BeneficiariesService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateBeneficiariesDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: BeneficiariesEntity,
  })
  async update(
    @Param('id') id: string,
    @Body() updateBeneficiariesDto: UpdateBeneficiariesDto,
  ): Promise<any> {
    try {
      const result = await this.BeneficiariesService.editBeneficiariesById(
        id,
        updateBeneficiariesDto,
      );

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
        'An error occurred while retrieving Beneficiariess.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BeneficiariesService.update(id, updateBeneficiariesDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: BeneficiariesEntity,
  })
  async remove(@Param('id') id: string): Promise<any> {
    try {
      const result =
        await this.BeneficiariesService.deleteBeneficiariesById(id);

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
        'An error occurred while retrieving Beneficiariess.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    // return this.BeneficiariesService.remove(id);
  }
  //   ############################################################
}
