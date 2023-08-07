import { PostType } from '@prisma/client';

export class UpdatePostTextDto {
  type!: PostType;
  postId!: string;
  title?: string;
  preview?: string;
  textContent?: string;
  tagsList?: string[];
}
