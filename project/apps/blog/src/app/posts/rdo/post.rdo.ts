import { PostType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class PostRdo {
  @Expose()
  id!: string;

  @Expose()
  type!: PostType;

  @Expose()
  postAuthorId!: number;

  @Expose()
  dateCreated!: string;

  @Expose()
  likesCount!: number;

  @Expose()
  commentsCount!: number;

  @Expose()
  tagsList!: string[] | null;

  @Expose()
  title?: string | null;

  @Expose()
  description?: string | null;

  @Expose()
  url?: string | null;

  @Expose()
  textContent?: string | null;

  @Expose()
  quoteAuthor?: string | null;

  @Expose()
  preview?: string | null;
}
