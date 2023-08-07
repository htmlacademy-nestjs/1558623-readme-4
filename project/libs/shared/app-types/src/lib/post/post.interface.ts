import { PostType } from '@prisma/client';

export interface IPost {
  type: PostType;
  postAuthorId?: string;
  tagsList: string[];
  title: string | null;
  description: string | null;
  url: string | null;
  textContent: string | null;
  quoteAuthor: string | null;
  preview: string | null;
}
