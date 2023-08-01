import { IUser } from '@project/shared/app-types';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements IUser {
  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  passwordHash!: string;

  @Prop()
  avatar?: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
