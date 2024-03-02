import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guard/auth.guard';
import { LoansService } from './loans.service';
import { Loan } from './schemas/loans.schema';

@UseGuards(AuthGuard)
@ApiTags('loans')
@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  create(@Body() createLoanDto: any): Promise<Loan> {
    return this.loansService.create(createLoanDto);
  }

  @Get()
  findAll(): Promise<Loan[]> {
    return this.loansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Loan> {
    return this.loansService.findOne(+id);
  }
}
