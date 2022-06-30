
import { Role } from '@/types';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  public role: Role;

  @Column({ type: 'varchar', unique: true })
  public email: string;

  @Column({ type: 'varchar' })
  public password: string;

}
