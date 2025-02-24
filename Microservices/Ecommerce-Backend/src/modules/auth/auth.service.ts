import { Injectable } from '@nestjs/common';
import { User, UserDTO } from 'src/types/user.type';
import { UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async findUser(
    email: string,
    getAllParams = false,
  ): Promise<User | undefined> {
    return this.userService.findUser(email, getAllParams);
  }

  async register(user: UserDTO): Promise<any> {
    return this.userService.create(user);
  }
}
