import { IAuthor } from '@project/shared/app-types';

export class CommentRdo {
  id!: string;
  commentText!: string;
  commentAuthor!: IAuthor;
  dateCreated!: string;
}
