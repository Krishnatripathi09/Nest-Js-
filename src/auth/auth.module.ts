/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { Jwtstrategy } from './strategies/jwt.startegy';

@Module({

  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '1h' }
    })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,Jwtstrategy]

})
export class AuthModule { }