import { PostType } from '@prisma/client';

export class UpdatePostVideoDto {
  type!: PostType;
  title?: string;
  url?: string;
  tagsList?: string[];
}
