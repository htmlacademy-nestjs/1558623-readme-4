import { PostType } from '@prisma/client';

export class CreatePostVideoDto {
  postAuthorId!: string;
  type!: PostType;
  title!: string;
  url!: string;
  tagsList?: string[];
}
