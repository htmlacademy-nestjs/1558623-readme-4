import { PostType } from '@prisma/client';

export class UpdatePostPhotoDto {
  type!: PostType;
  url?: string;
  tagsList?: string[];
}
