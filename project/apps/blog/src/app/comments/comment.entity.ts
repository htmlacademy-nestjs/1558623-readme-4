import { CreateCommentDto } from './dto/create-comment.dto';
import { IEntity } from '@libs/utils-types';
import { Comment } from '@prisma/client';

export class CommentEntity implements IEntity<CommentEntity, Partial<Comment>>, Partial<Comment> {
  public commentText!: string;
  public authorId!: string;
  public postId!: number;

  constructor(commentDto: CreateCommentDto) {
    this.fillEntity(commentDto);
  }

  public fillEntity(dto: CreateCommentDto) {
    this.commentText = dto.commentText;
    this.authorId = dto.authorId;
    this.postId = dto.postId;
  }

  public toObject(): CommentEntity {
    return { ...this };
  }
}
