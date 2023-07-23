import { ICRUDRepository } from '@project/utils/utils-types';
import { BlogUserEntity } from './blog-user.entity';
import { IUser } from '@project/shared/app-types';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogUserMemoryRepository implements ICRUDRepository<BlogUserEntity, string, IUser> {
  private repository: Record<string, IUser> = {};

  public async findById(id: string): Promise<IUser | null> {
    return Promise.resolve(this.repository[id] || null);
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const existingUser = Object.values(this.repository).find((item) => email === item.email);
    if (!existingUser) {
      return null;
    }

    return Promise.resolve(existingUser);
  }

  public async create(item: BlogUserEntity): Promise<IUser | void> {
    const newUser = { ...item.toObject(), _id: randomUUID() };
    this.repository[newUser._id] = newUser;
    return Promise.resolve(newUser);
  }

  public async update(id: string, item: BlogUserEntity): Promise<IUser | void> {
    const existingUser = this.findById(id);
    if (!existingUser) {
      throw new Error('Item does not exist');
    }

    const newUser = { ...item.toObject(), _id: id };
    this.repository[id] = newUser;

    return Promise.resolve(newUser);
  }

  public async destroy(id: string): Promise<void> {
    const existingUser = this.findById(id);
    if (!existingUser) {
      throw new Error('User does not exist');
    }

    const deletionResult = delete this.repository[id];
    if (!deletionResult) {
      throw new Error('Failed to delete User');
    }

    return;
  }
}
