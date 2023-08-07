import { PostType } from '@prisma/client';

export class PostRdo {
  id!: string;
  type!: PostType;
  postAuthorId!: number;
  dateCreated!: string;
  likesCount!: number;
  commentsCount!: number;
  tagsList!: string[] | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  textContent?: string | null;
  quoteAuthor?: string | null;
  preview?: string | null;
}
