import { Body, Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { comparePasswords } from '../../helpers/passwordHash';
import { generateToken } from '../../helpers/Jwt';
import { CustomerService } from '../customer/customer.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}
  // ######################################################################

  // async signIn(id: string, pass: string): Promise<any> {
  //   const user = await this.customerService.findOne(id);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const { password, ...result } = user;
  //   // TODO: Generate a JWT and return it here
  //   // instead of the user object
  //   return result;
  // }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.customerService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { lastname: user.lastname, email: user.email };
    return {
      
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
