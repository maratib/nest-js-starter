import { Injectable, Logger } from '@nestjs/common';

/**
 * service docs
 */
@Injectable()
export class UserService {
  protected readonly logger = new Logger(this.constructor.name);

  /**
   * get by id
   * @param id
   * @return null
   */
  getById(id: number) {
    throw new Error('Method not implemented.');
  }

  getAll() {
    return '1234567';
  }

  delete(arg0: number) {
    throw new Error('Method not implemented.');
  }

  update(arg0: number, post: object) {
    throw new Error('Method not implemented.');
  }

  create(post: object) {
    throw new Error('Method not implemented.');
  }
}
