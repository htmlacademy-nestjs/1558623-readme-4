import { IAuthor, TPostType } from '@project/shared/app-types';

export class PostRdo {
  type: TPostType;
  postAuthor: IAuthor;
  dateCreated: string;
  id: string;
  likesCount: number;
  commentsCount: number;
  url: string | null;
  description: string | null;
  title: string | null;
  textContent: string | null;
  quoteAuthor: string | null;
  preview: string | null;
  tagsList: string[] | null;
}
