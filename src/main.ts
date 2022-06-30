declare const module: any;
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './v1/app.module';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import { HttpExceptionFilter } from './utils/http-exception-filter.exception';
import { Logger } from '@nestjs/common';
import { getLogLevels } from './config/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: getLogLevels(),
  });

  const config = app.get<ConfigService>(ConfigService);
  const logger = new Logger('main.ts');
  const port = config.get('port');

  // Add Body parser
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

  // Add helmet
  app.use(helmet());

  app.enableCors();

  // Set view engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port, () => {
    logger.debug(`Started at port: ${port}`);
  });
}
bootstrap();
