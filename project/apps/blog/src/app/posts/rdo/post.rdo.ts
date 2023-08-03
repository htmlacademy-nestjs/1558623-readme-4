import { IAuthor, PostType } from '@project/shared/app-types';

export class PostRdo {
  id!: string;
  type!: PostType;
  postAuthor!: IAuthor;
  dateCreated!: string;
  likesCount!: number;
  commentsCount!: number;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  textContent?: string | null;
  quoteAuthor?: string | null;
  preview?: string | null;
  tagsList!: string[] | null;
}
