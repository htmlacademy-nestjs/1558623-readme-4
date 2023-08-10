import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constants';
import { IAppUser } from '@libs/shared-app-types';

export class BlogUserEntity implements IAppUser {
  public name!: string;
  public email!: string;
  public passwordHash!: string;
  public avatar!: string;

  constructor(user: IAppUser) {
    this.fillEntity(user);
  }

  public toObject(): IAppUser {
    return {
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
    };
  }

  public fillEntity({ name, email, passwordHash, avatar }: IAppUser) {
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.avatar = avatar || '';
  }

  public async setHashFromPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePasswordWithHash(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
