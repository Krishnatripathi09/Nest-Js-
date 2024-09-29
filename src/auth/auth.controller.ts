/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthpayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from 'src/guards/local.guard';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: any) {
        return req.user;
    }


    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: any) {
        console.log('Inside AuthController status method');
        console.log(req.user)
        return req.user;
    }
}