import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { Comment } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  public async create(dto: CreateCommentDto): Promise<Comment> {
    return this.commentsRepository.create(new CommentEntity(dto));
  }

  public async delete(id: number): Promise<void> {
    return this.commentsRepository.delete(id);
  }

  public async findManyByPostId(postId: number): Promise<Comment[]> {
    return this.commentsRepository.findManyByPostId(postId);
  }
}
