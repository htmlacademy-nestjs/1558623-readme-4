import { PostType } from '@prisma/client';

export class UpdatePostVideoDto {
  type!: PostType;
  postId!: string;
  title?: string;
  url?: string;
  tagsList?: string[];
}
