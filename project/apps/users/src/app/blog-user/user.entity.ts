import {IUser, TUserRole} from "@project/shared/app-types";

export class UserEntity implements IUser {
  public _id: string;
  public name: string;
  public email: string;
  public passwordHash: string;
  public role: TUserRole
  public avatar: string;

  constructor(user: IUser) {
    this.fillEntity(user)
  }

  public toObject(): IUser {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash,
      role: this.role,
      avatar: this.avatar,
    }
  }

  public fillEntity({_id, name, email, passwordHash, role, avatar}: IUser) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.avatar = avatar;
  }
}
