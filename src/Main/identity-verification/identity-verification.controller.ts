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
import { ApiForbiddenResponse, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateIdentityDto } from './dtos/create.Identity.dto';
import { UpdateIdentityDto } from './dtos/update.identity.dto';
import { Identity } from './schemas/identity.schema';
import { IdentityVerificationService } from './identity-verification.service';
import { Identity as IdentityEntity } from './entities/identity.entity';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('identity-verification')
export class IdentityVerificationController {
  constructor(private IdentityService: IdentityVerificationService) {}

  //   ############################################################

  @Post()
  async create(@Payload() data: CreateIdentityDto) {
    console.log('data', data);

    return await this.IdentityService.create(data);
  }
  //   ############################################################
  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'All the Identitys',
    type: IdentityEntity,
  })
  findAll(): Promise<Identity[]> {
    return this.IdentityService.findAll();
  }
  //   ############################################################

  @Get(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'A Identity',
    type: IdentityEntity,
  })
  findOne(@Param('id') id: string): Promise<Identity> {
    return this.IdentityService.findOne(id);
  }
  //   ############################################################

  @Patch(':id')
  @ApiBody({ type: UpdateIdentityDto })
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Updated',
    type: IdentityEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateIdentityDto: UpdateIdentityDto,
  ): Promise<Identity> {
    return this.IdentityService.update(id, updateIdentityDto);
  }
  //   ############################################################

  @Delete(':id')
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'Deleted',
    type: IdentityEntity,
  })
  remove(@Param('id') id: string): Promise<Identity> {
    return this.IdentityService.remove(id);
  }
  //   ############################################################
}
