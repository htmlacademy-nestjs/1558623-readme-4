import { PostType } from '@prisma/client';

export class UpdatePostPhotoDto {
  type!: PostType;
  postId!: string;
  url?: string;
  tagsList?: string[];
}
