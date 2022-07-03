import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config, validationSchema } from '@/config/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { ScheduleModule } from '@nestjs/schedule';
import { AppService } from './app.service';
import { TaskService } from './task.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [config],
    }),
    UserModule,
    AuthModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [AppService, TaskService],
})
export class AppModule {}
