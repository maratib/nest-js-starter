import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly log = new Logger(AppService.name)



  getHello(): string {
    this.log.warn("Gets hello world")
    return 'Hello World!';
  }
}
