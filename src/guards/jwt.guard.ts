/* eslint-disable prettier/prettier */
import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('Inside Jwt AuthGuard CanActivate method to call AuthGuard to verify whether the jwt token is valid or not ')
        return super.canActivate(context);
    }
}
