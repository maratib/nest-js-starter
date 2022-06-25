import { Controller, Get, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private config: ConfigService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world 12345!' };
  }

  @Get('/about')
  @Render('about')
  about() {
    return { message: 'About message!' };
  }
}
