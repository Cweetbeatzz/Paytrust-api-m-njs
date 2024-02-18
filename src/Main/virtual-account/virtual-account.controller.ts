import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/Guard/auth.guard';


@UseGuards(AuthGuard)
@Controller('virtual-account')
export class VirtualAccountController {}
