import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './entities/user.entity';
import { typeOrmModuleOptions } from '../config/orm.config';
import { typeOrmAsyncConfig } from '../config/typeorm.config';

const Repositories = TypeOrmModule.forFeature([UserEntity]);

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), Repositories],
})
export class DatabaseModule {}
