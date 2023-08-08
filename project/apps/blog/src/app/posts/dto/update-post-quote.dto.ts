import { PostType } from '@prisma/client';

export class UpdatePostQuoteDto {
  type!: PostType;
  textContent?: string;
  quoteAuthor?: string;
  tagsList?: string[];
}
