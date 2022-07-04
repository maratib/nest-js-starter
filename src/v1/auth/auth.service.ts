import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from './../user/user.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtTokenService: JwtService) { }
  async validateUserCredentials(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) throw new BadRequestException();

    if (!(await bcrypt.compare(password, user.password))) throw new UnauthorizedException();

    return user;
  }
  generateToken(user: any) {
    const payload = { username: user.email, sub: user.id };
    return { access_token: this.jwtTokenService.sign(payload) };
  }
}
