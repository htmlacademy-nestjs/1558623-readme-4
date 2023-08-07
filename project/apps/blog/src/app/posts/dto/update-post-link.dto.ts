import { PostType } from '@prisma/client';

export class UpdatePostLinkDto {
  type!: PostType;
  postId!: string;
  url?: string;
  description?: string;
  tagsList?: string[];
}
