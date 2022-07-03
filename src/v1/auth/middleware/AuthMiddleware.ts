import { NestMiddleware } from '@nestjs/common';

export class AuthMiddleware implements NestMiddleware {
  constructor() {}
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('adsfadsf');

    throw new Error('Method not implemented.');
  }
}
