/* eslint-disable prettier/prettier */
import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) { }

  async signup(dto: CreateAuthDto) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({ where: { email } })
    if (foundUser) {
      throw new BadRequestException('Email Already Exists')
    }

    const hashedPassword = await this.hashPassword(password)

    await this.prisma.user.create({
      data: {
        email,
        hashedPassword
      }
    })
    return { message: 'signup was successful' }
  }
  async signin(dto: CreateAuthDto, req: Request, res: Response) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({ where: { email } })
    if (!foundUser) {
      throw new BadRequestException('Please enter Valid Email')
    }
    const isMatch = await this.comparePasswords({ password, hash: foundUser.hashedPassword });

    if (!isMatch) {
      throw new BadRequestException('Please enter Correct Password')
    }
    // Sign JWT and Return it to the user 
    const token = await this.signToken({ id: foundUser.id, email: foundUser.email })
    if (!token) {
      throw new ForbiddenException()
    }

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
    })

    return res.send({ message: 'Logged in Successfully' });
  }
  async signout(req: Request, res: Response) {
    res.clearCookie('token')
    return res.send({ message: 'Logged Out Successfully' });

  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);


  }

  async comparePasswords(args: { password: string, hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }


  async signToken(args: { id: string, email: string }) {
    const payload = args;

    return this.jwt.signAsync(payload, {
      secret: jwtSecret

    })
  }
}
