import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { IComment } from '@project/shared/app-types';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  public async create(dto: CreateCommentDto): Promise<IComment> {
    return this.commentsRepository.create(new CommentEntity(dto));
  }

  public async delete(id: number): Promise<void> {
    return this.commentsRepository.delete(id);
  }

  public async findById(id: number): Promise<IComment | null> {
    return this.commentsRepository.findById(id);
  }

  public async findByPostId(postId: number): Promise<IComment[] | null> {
    return this.commentsRepository.findByAuthorId(postId);
  }
}
