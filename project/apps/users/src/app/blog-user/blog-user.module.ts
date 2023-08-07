import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from '@apps/users-blog-user/blog-user.model';
import { BlogUserRepository } from '@apps/users-blog-user/blog-user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BlogUserModel.name,
        schema: BlogUserSchema,
      },
    ]),
  ],
  providers: [BlogUserRepository],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
