import { PostType } from '@prisma/client';

export class CreatePostPhotoDto {
  postAuthorId!: string;
  type!: PostType;
  url!: string;
  tagsList?: string[];
}
