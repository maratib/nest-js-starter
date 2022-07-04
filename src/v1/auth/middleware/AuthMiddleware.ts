import { Logger, NestMiddleware } from '@nestjs/common';

export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(this.constructor.name);

  constructor() { }
  use(req: any, res: any, next: (error?: any) => void) {
    this.logger.debug("I am from AuthMiddleware");

    next();

  }
}
