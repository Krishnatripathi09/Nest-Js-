/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AuthpayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
const fakeUsers = [
    {
        id: 1,
        username: 'anson',
        password: 'password',
    },

    {
        id: 2,
        username: 'jack',
        password: 'password123',
    }
]
@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {

    }
    validateUser({ username, password }: AuthpayloadDto) {
        console.log("I am inside service method.")
        const findUser = fakeUsers.find((user) => user.username === username);
        console.log("I have verified the username and its correct", findUser)
        if (!findUser) return null;
        if (password === findUser.password) {
            const { password, ...user } = findUser;
            console.log("I have verified the password and that is correct so i am returning a signed JWT Token")
            return this.jwtService.sign(user)
        }

    }
}
