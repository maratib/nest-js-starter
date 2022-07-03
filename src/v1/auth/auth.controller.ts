import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from '@/utils/app.utils';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDto): Promise<any> {
    return this.authService.generateToken(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
