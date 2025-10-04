import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      phone: '255742618178'
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@example.com',
      phone: '255742618179'
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@example.com',
      phone: '255742618180'
    }
  ]

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) return 'User not found';
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      return 'User not found';
    }
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return 'User not found';
    }
    this.users.splice(userIndex, 1);
    return `This action removes a #${id} user`;
  }
}
