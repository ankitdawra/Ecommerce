import { Injectable } from '@nestjs/common';
import { User } from 'src/types/user.type';
import { UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async findUser(email: string): Promise<User | undefined> {
    return this.userService.findUser(email);
  }
}
