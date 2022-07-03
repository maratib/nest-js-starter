import { Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { User } from '@/db/entities/user.entity';
import { PaginationDto, SETTINGS } from '@/utils/app.utils';
// import { UserRegisterRequestDto } from './dto/user-register.req.dto';

import { UserService } from './user.service';
import { UserRegisterDto } from './user-register.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'User cannot register. Try again!',
  })
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterDto,
  ): Promise<User> {
    return await this.userService.doUserRegistration(userRegister);
  }

  @Get('/all')
  @ApiResponse({
    description: 'List of Users object as response',
    type: [User],
  })
  // async getAllUsers(@Body(SETTINGS.PaginationDto) options: IPaginationOptions): Promise<any> {
  //   return null;
  // }
  // async getAllUsers(@Query() query: PaginationDto): Promise<Pagination<User>> {
  //   return await this.userService.getAllUsers(query);
  // }
  async getAllUsers(@Query() query: PaginationDto): Promise<Pagination<User>> {
    return await this.userService.getAllUsers(query);
  }
}
