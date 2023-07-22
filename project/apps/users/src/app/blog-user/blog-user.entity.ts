import { IUser } from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constants.js';

export class BlogUserEntity implements IUser {
  public _id: string;
  public name: string;
  public email: string;
  public passwordHash: string;
  public avatar: string;

  constructor(user: IUser) {
    this.fillEntity(user);
  }

  public toObject(): IUser {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash,
      avatar: this.avatar
    };
  }

  public fillEntity({ _id, name, email, passwordHash, avatar }: IUser) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.avatar = avatar;
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
