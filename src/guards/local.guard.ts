/* eslint-disable prettier/prettier */
import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class LocalGuard extends AuthGuard('local') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('canActivate Method is hit now')

        console.log("Now i have called Authguard that is my parent class to Verify user Credentials ")
        return super.canActivate(context);
    }
}
