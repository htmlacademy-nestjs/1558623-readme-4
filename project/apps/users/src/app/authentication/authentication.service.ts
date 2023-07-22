import { ConflictException, Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from '@blog-user/blog-user.memory-repository.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { AuthMessage } from './authentication.constants.js';
import { BlogUserEntity } from '@blog-user/blog-user.entity.js';
import { IUser } from '@project/shared/app-types';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {
  }

  public async register(dto: CreateUserDto) {
    const { email, password } = dto;
    const existingUser = this.blogUserRepository.findByEmail(email);

    if (existingUser) {
      throw new ConflictException(AuthMessage.UserExists(email));
    }

    const newUser: IUser = {
      ...dto,
      passwordHash: ''
    };

    const userEntity = await new BlogUserEntity(newUser).setHashFromPassword(password);

    return this.blogUserRepository.create(userEntity);
  }
}
