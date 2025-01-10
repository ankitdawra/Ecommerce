import { Injectable } from '@nestjs/common';
import { CreateUserDTO, User } from '../types/user.type';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    console.log(user);
    return user;
  }

  async findUser(email: string): Promise<any> {
    const res = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log('Query result-', res);
    return res;
  }
}
