/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: CreateAuthDto) {
    return this.authService.signup(dto);
  }


  @Post('signin')
  signin(@Body() dto: CreateAuthDto){
    return this.authService.signin(dto);
  }


  @Get('signout')
  signout(){
    return this.authService.signout();
  }
}
