import { PostType } from '@prisma/client';

export class CreatePostQuoteDto {
  postAuthorId!: string;
  type!: PostType;
  textContent!: string;
  quoteAuthor!: string;
  tagsList?: string[];
}
