import { Body, Injectable, Req } from '@nestjs/common';
import { comparePasswords } from '../../helpers/passwordHash';
import { generateToken } from '../../helpers/Jwt';

@Injectable()
export class AuthService {
  constructor() {}

  // ######################################################################

  async login(@Body() req: any) {
    try {
      console.log('loggining in...');
      console.log(req.body);
      const { email, password } = req.body;
      // console.log("email", email);
      //search fr email
      //   const searchUserEmail = await AuthRepoInstance.login(email);
      const searchUserEmail = 'await AuthRepoInstance.login(email)';
      // console.log("searchUserEmail", searchUserEmail);
      // console.log("searchUserEmail.password", searchUserEmail.data.password);
      // compare passwords
      if (searchUserEmail) {
        //if password correct
        // if (comparePasswords(searchUserEmail.data.password, password)) {
        //   //send these details plus the generated token
        //   return {
        //     id: searchUserEmail.data._id,
        //     lastname: searchUserEmail.data.lastname,
        //     email: searchUserEmail.data.email,
        //     role: searchUserEmail.data.role,
        //     token: generateToken(searchUserEmail),
        //   };
        // }
      }
      return { error: 'Unauthorized access' };
    } catch (error) {
      console.log(error);
    }
  }
}
