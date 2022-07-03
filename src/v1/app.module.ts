import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config, validationSchema } from '@/config/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
