import { IUser, TUserRole } from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constants.js';

export class BlogUserEntity implements IUser {
  public _id: string;
  public name: string;
  public email: string;
  public passwordHash: string;
  public role: TUserRole;
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
      role: this.role,
      avatar: this.avatar
    };
  }

  public fillEntity({ _id, name, email, passwordHash, role, avatar }: IUser) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.avatar = avatar;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
