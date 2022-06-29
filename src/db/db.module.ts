import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { typeOrmAsyncConfig } from '../config/typeorm.config';

const Repositories = TypeOrmModule.forFeature([UserEntity]);

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), Repositories],
})
export class DbModule { }
