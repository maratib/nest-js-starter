import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private config: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.config.get<string>('jwt.secret'));

    return this.appService.getHello();
    // return ;
  }
}
