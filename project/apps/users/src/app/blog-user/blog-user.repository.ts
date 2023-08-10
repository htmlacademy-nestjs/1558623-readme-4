import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogUserModel } from '@apps/users-blog-user/blog-user.model';
import { IAppUser } from '@libs/shared-app-types';
import { ICRUDRepository } from '@libs/utils-types';
import { BlogUserEntity } from '@apps/users-blog-user/blog-user.entity';

@Injectable()
export class BlogUserRepository implements ICRUDRepository<BlogUserEntity, string, IAppUser> {
  constructor(
    @InjectModel(BlogUserModel.name) private readonly blogUserModel: Model<BlogUserModel>,
  ) {}

  public async findById(id: string): Promise<IAppUser | null> {
    return this.blogUserModel.findById(id).exec();
  }

  public async findByEmail(email: string): Promise<IAppUser | null> {
    return this.blogUserModel.findOne({ email });
  }

  public async create(user: BlogUserEntity): Promise<IAppUser> {
    const newUser = new this.blogUserModel(user);
    return newUser.save();
  }

  public async update(id: string, user: BlogUserEntity): Promise<IAppUser | null> {
    return this.blogUserModel.findByIdAndUpdate(id, user.toObject(), { new: true }).exec();
  }

  public async delete(id: string): Promise<void> {
    this.blogUserModel.deleteOne({ _id: id });
  }
}
