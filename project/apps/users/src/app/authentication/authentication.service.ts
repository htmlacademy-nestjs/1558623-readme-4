import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthMessage } from './authentication.constants';
import { BlogUserEntity } from '@blog-user/blog-user.entity';
import { IUser } from '@project/shared/app-types';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigType } from '@nestjs/config';
import { mongoDbConfig } from '@config-users';
import { BlogUserRepository } from '@blog-user/blog-user.repository';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(mongoDbConfig.KEY) private readonly dbConfig: ConfigType<typeof mongoDbConfig>,
    private readonly blogUserRepository: BlogUserRepository,
  ) {}

  public async getUserById(id: string): Promise<IUser> {
    const existingUser = await this.blogUserRepository.findById(id);
    if (!existingUser) {
      throw new NotFoundException(AuthMessage.UserNotFoundById(id));
    }

    return existingUser;
  }

  public async verifyUser(dto: LoginUserDto): Promise<IUser> {
    const { email, password } = dto;

    const existingUser = await this.blogUserRepository.findByEmail(email);

    if (!existingUser) {
      throw new NotFoundException(AuthMessage.UserNotFoundByEmail(email));
    }

    const blogUserEntity = new BlogUserEntity(existingUser);
    const isPasswordCorrect = await blogUserEntity.comparePasswordWithHash(password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException(AuthMessage.PasswordIncorrect());
    }

    return blogUserEntity.toObject();
  }

  public async register(dto: CreateUserDto) {
    const { email, password } = dto;
    const existingUser = await this.blogUserRepository.findByEmail(email);

    if (existingUser) {
      throw new ConflictException(AuthMessage.UserExists(email));
    }

    const newUser: IUser = {
      ...dto,
      passwordHash: '',
    };

    const userEntity = await new BlogUserEntity(newUser).setHashFromPassword(password);

    return this.blogUserRepository.create(userEntity);
  }
}
