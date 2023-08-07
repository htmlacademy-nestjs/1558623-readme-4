import { IEntity } from '@project/utils/utils-types';
import { IComment } from '@project/shared/app-types';
import { CreateCommentDto } from './dto/create-comment.dto';

export class CommentEntity implements IEntity<CommentEntity, CreateCommentDto>, IComment {
  public id?: number;
  public commentText: string;
  public authorId: string;
  public postId: number;

  constructor(commentDto: CreateCommentDto) {
    this.commentText = commentDto.commentText;
    this.authorId = commentDto.authorId;
    this.postId = commentDto.postId;
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
