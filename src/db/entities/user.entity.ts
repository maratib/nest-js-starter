import * as bcrypt from 'bcrypt';
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '@/types';

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

  @Column({ type: 'boolean', default: false })
  public active: string;

  @Column({ type: 'boolean', default: false })
  public blocked: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
