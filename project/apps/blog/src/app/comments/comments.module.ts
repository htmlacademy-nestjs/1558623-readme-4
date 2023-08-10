import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { CommentsService } from './comments.service';
import { PrismaService } from '@apps/blog-prisma/prisma.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsRepository, CommentsService, PrismaService],
  exports: [CommentsRepository],
})
export class CommentsModule {}
