import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import { HttpExceptionFilter } from './utils/http-exception-filter.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add Body parser
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

  // Add helmet
  app.use(helmet());

  app.enableCors();

  // Set view engine
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('ejs');

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000, () => {
    console.log('Started at port: 3000');
  });
}
bootstrap();
