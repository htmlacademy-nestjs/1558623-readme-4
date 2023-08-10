import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  id!: number;

  @Expose()
  commentText!: string;

  @Expose()
  authorId!: string;

  @Expose()
  dateCreated!: string;
}
