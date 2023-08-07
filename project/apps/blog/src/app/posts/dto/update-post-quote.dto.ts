import { PostType } from '@prisma/client';

export class UpdatePostQuoteDto {
  type!: PostType;
  postId!: string;
  textContent?: string;
  quoteAuthor?: string;
  tagsList?: string[];
}
