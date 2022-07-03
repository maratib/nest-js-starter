import { Pagination } from 'nestjs-typeorm-paginate';
import { DefaultValuePipe, HttpStatus, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { toNumber } from './cast.helper';
import { ApiProperty } from '@nestjs/swagger';

const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper case, lowercase letter along with a number and special character.';

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = {
  PASSWORD_RULE,
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
};

export class LoginDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'reachme@amitavroy.com',
  })
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @ApiProperty({
    description: 'Password in plain text',
    example: 'Password@123',
  })
  @IsNotEmpty()
  password: string;
}

export class PaginationDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page: number = 1;

  @Transform(({ value }) => toNumber(value, { default: 2, min: 1 }))
  @IsNumber()
  @IsOptional()
  public limit: number = 2;
}

export const SETTINGS = {
  VALIDATION_PIPE,
};
