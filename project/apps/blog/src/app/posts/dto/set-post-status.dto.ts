import { TPostStatus } from '@project/shared/app-types';

export class SetPostStatusDto {
  postId: string;
  postStatus: TPostStatus;
}
