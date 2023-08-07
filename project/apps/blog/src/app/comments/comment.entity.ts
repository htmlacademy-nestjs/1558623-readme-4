import { IEntity } from '@project/utils/utils-types';
import { ICreateComment } from '@project/shared/app-types';

export class CommentEntity implements IEntity<CommentEntity, ICreateComment>, ICreateComment {
  public id: number;
  public commentText: string;
  public commentAuthorId: string;
  public postId: number;

  constructor(comment: ICreateComment) {
    this.id = comment.id;
    this.commentText = comment.commentText;
    this.commentAuthorId = comment.commentAuthorId;
    this.postId = comment.postId;
  }

  public fillEntity(entity: ICreateComment) {
    this.id = entity.id;
    this.commentText = entity.commentText;
    this.commentAuthorId = entity.commentAuthorId;
    this.postId = entity.postId;
  }

  public toObject(): CommentEntity {
    return { ...this };
  }
}
