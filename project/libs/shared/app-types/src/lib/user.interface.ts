import {TUserRole} from "@project/shared/app-types";

export interface IUser {
  _id?: string;
  email: string;
  name: string;
  avatar: string;
  passwordHash: string;
  role: TUserRole;
}
