import { PostType } from '@prisma/client';

export class UpdatePostLinkDto {
  type!: PostType;
  url?: string;
  description?: string;
  tagsList?: string[];
}
