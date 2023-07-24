import { IPostAuthor, TPostVideo } from '@project/shared/app-types';

export class CreateUpdatePostVideoRdo {
  postAuthor: IPostAuthor;
  dateCreated: string;
  dateUpdated: string;
  title: string;
  url: string;
  tagsList?: string[];
  type: TPostVideo;
}
