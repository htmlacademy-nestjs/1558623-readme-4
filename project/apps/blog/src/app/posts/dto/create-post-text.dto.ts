import { PostType } from '@prisma/client';

export class CreatePostTextDto {
  postAuthorId!: string;
  type!: PostType;
  title!: string;
  preview!: string;
  textContent!: string;
  tagsList?: string[];
}
