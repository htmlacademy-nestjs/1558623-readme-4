import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { IComment } from '@libs/shared-app-types';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  public async create(dto: CreateCommentDto): Promise<IComment> {
    return this.commentsRepository.create(new CommentEntity(dto));
  }

  public async delete(id: number): Promise<void> {
    return this.commentsRepository.delete(id);
  }

  public async findManyByPostId(postId: number): Promise<IComment[] | null> {
    return this.commentsRepository.findManyByAuthorId(postId);
  }
}
