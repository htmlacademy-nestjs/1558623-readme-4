import { PrismaService } from '@apps/blog-prisma/prisma.service';
import { CommentEntity } from './comment.entity';
import { ICRUDRepository } from '@libs/utils-types';
import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';

@Injectable()
export class CommentsRepository implements ICRUDRepository<CommentEntity, number, Comment> {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(comment: CommentEntity): Promise<Comment> {
    return this.prismaService.comment.create({
      data: {
        ...comment.toObject(),
      },
    });
  }

  public async delete(id: number): Promise<void> {
    this.prismaService.comment.delete({
      where: { id },
    });
  }

  public async findManyByPostId(postId: number): Promise<Comment[]> {
    return this.prismaService.comment.findMany({
      where: { postId: postId },
    });
  }
}
