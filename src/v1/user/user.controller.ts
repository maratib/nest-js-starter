import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

/**
 * Controller docs
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {}

  /**
   * Function docs
   * @params
   * @returns null
   */
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  /**
   *
   * @param id
   * @returns
   */
  @Get(':id')
  getById(@Param('id') id: number) {
    return null;
  }

  @Post()
  async doPost(@Body() post: object) {
    return null;
  }

  @Put(':id')
  async doUpdate(@Param('id') id: string, @Body() post: object) {
    return null;
  }

  @Delete(':id')
  async doDelete(@Param('id') id: string) {
    return null;
  }
}
