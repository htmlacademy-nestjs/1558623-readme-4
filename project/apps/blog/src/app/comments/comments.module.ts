import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';
import { PrismaService } from '@apps/blog-prisma/prisma.service';
import { PostController } from '../posts/post.controller';
import { PostRepository } from '../posts/post.repository';
import { PostService } from '../posts/post.service';

@Module({
  controllers: [CommentsController, PostController],
  providers: [CommentsRepository, CommentsService, PrismaService, PostRepository, PostService],
  exports: [CommentsRepository],
})
export class CommentsModule {}
