/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAuthDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Password length should be between 3 and 20 chars' })
    public password: string;
}