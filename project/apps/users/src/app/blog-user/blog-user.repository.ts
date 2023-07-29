import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogUserModel } from '@blog-user/blog-user.model';
import { ICRUDRepository } from '@project/utils/utils-types';
import { BlogUserEntity } from '@blog-user/blog-user.entity';
import { IUser } from '@project/shared/app-types';
import { Model } from 'mongoose';

@Injectable()
export class BlogUserRepository implements ICRUDRepository<BlogUserEntity, string, IUser> {
  constructor(
    @InjectModel(BlogUserModel.name) private readonly blogUserModel: Model<BlogUserModel>,
  ) {}

  public async findById(id: string): Promise<IUser | null> {
    return this.blogUserModel.findById(id).exec();
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    return this.blogUserModel.findOne({ email });
  }

  public async create(user: BlogUserEntity): Promise<IUser> {
    const newUser = new this.blogUserModel(user);
    return newUser.save();
  }

  public async update(id: string, user: BlogUserEntity): Promise<IUser> {
    return this.blogUserModel.findByIdAndUpdate(id, user.toObject(), { new: true }).exec();
  }

  public async delete(id: string): Promise<void> {
    this.blogUserModel.deleteOne({ _id: id });
  }
}
