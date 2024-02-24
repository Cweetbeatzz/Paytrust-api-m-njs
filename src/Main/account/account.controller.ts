import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './schemas/account.schema';
import { AccountService } from './account.service';
import { AuthGuard } from 'src/Guard/auth.guard';
import { AccountEntity } from './entities/account.entity';

@UseGuards(AuthGuard)
@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountsService: AccountService) {}

  // @Get()
  // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Bye');
  //   return 'getAll()';
  // }

  @Get()
  @ApiForbiddenResponse()
  @ApiResponse({
    status: 200,
    description: 'An Account',
    type: AccountEntity,
  })
  getAll(): Promise<Account[]> {
    return this.accountsService.getAll();
  }

  // ######################################################################

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'An Account',
    type: AccountEntity,
  })
  getOne(@Param('id') id: string): Promise<Account> {
    return this.accountsService.getById(id);
  }
  // ######################################################################

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  @ApiOperation({ summary: 'Create Account' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({
    status: 200,
    description: 'An Account',
    type: AccountEntity,
  })
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }
  // ######################################################################

  @Put(':id')
  @ApiOperation({ summary: 'Update Account' })
  @ApiResponse({ status: 200, description: 'Updated' })
  @ApiResponse({
    status: 200,
    description: 'An Account',
    type: AccountEntity,
  })
  update(
    @Body() updateAccountDto: UpdateAccountDto,
    @Param('id') id: string,
  ): Promise<Account> {
    return this.accountsService.update(id, updateAccountDto);
  }
  // ######################################################################

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'An Account',
    type: AccountEntity,
  })
  remove(@Param('id') id: string): Promise<Account> {
    return this.accountsService.remove(id);
  }
  // ######################################################################
}
