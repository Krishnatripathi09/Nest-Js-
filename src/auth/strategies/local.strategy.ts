/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {

        // Make sure to await the validateUser call since it might be asynchronous.
        const user = await this.authService.validateUser({ username, password });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
