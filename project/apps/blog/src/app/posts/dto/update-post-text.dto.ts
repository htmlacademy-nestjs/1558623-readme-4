import { PostType } from '@prisma/client';

export class UpdatePostTextDto {
  type!: PostType;
  title?: string;
  preview?: string;
  textContent?: string;
  tagsList?: string[];
}
