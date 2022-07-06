import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    private readonly logger = new Logger(this.constructor.name);
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log("Roles: ", roles);

        if (!roles || roles == undefined) {
            this.logger.debug("Going direct");

            return true;
        }


        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log("User", user);
        this.logger.debug(user);

        // return matchRoles(roles, user.roles);
        return true;
    }
}