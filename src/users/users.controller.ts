/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 
  @Get(':id')
  getMyUser(@Param() params: {id: string}){
return this.usersService.getMyUser(params.id)
  }

  @Get()
  getUsers(){
return this.usersService.getUsers()
  }
}
