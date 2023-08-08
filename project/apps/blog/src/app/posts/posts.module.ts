import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';
import { PrismaModule } from '@apps/blog-prisma/prisma.module';

@Module({
  controllers: [PostController],
  providers: [PostRepository, PostService],
  imports: [PrismaModule],
})
export class PostsModule {}
