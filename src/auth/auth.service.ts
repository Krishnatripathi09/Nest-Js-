/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor() { }

  async signup() {
    return { message: 'signup was successful' }
  }
  async signin() {
    return 'success';
  }
  async signout() {
    return '';

  }


}
