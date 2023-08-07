import { IEntity } from '@project/utils/utils-types';
import { IComment } from '@project/shared/app-types';

export class CommentEntity implements IEntity<CommentEntity, IComment>, IComment {
  public id: number;
  public commentText: string;
  public commentAuthorId: string;
  public postId: number;

  constructor(comment: IComment) {
    this.id = comment.id;
    this.commentText = comment.commentText;
    this.commentAuthorId = comment.commentAuthorId;
    this.postId = comment.postId;
  }

  public fillEntity(entity: IComment) {
    this.id = entity.id;
    this.commentText = entity.commentText;
    this.commentAuthorId = entity.commentAuthorId;
    this.postId = entity.postId;
  }

  public toObject(): CommentEntity {
    return { ...this };
  }
}
