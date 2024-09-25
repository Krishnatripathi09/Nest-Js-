/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async signup(dto: CreateAuthDto) {
  const {email, password} = dto;
    return { message: 'signup was successful' }
  }
  async signin() {
    return 'success';
  }
  async signout() {
    return '';

  }


}
