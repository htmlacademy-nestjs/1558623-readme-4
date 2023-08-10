// TODO: create a enum for PostStatus

import { PostType } from '@prisma/client';

export class SetPostStatusDto {
  type!: PostType;
  postId!: string;
  postStatus!: 'dummy';
}
