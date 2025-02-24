import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../types/user.type';
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
    console.log(data);
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    console.log(user);
    return true;
  }

  async findUser(email: string, getAllParams = false): Promise<any> {
    const res = await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log('Query result-', res);
    console.log('Get all params-', getAllParams);
    if (!getAllParams) {
      delete res?.password;
    }
    console.log('Query result 2-', res);
    return res;
  }
}
