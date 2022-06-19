import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string[] {
    const users = ['Azeem', 'Rana', 'Kashan'];
    return users;
  }

  getUser(): number {
    return 12345;
  }
}
