import { PostType } from '@prisma/client';

export interface IPost {
  id: number;
  type: PostType;
  postAuthorId: string;
  dateCreated: string;
  dateUpdated: string;
  likesCount: number;
  tagsList: string[];
  title?: string;
  description?: string;
  url?: string;
  textContent?: string;
  quoteAuthor?: string;
  preview?: string;
}
