import { PostType } from '@prisma/client';

export class CreatePostLinkDto {
  postAuthorId!: string;
  type!: PostType;
  url!: string;
  description?: string;
  tagsList?: string[];
}
