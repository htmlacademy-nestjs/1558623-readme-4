import { IPostAuthor, TPostPhoto } from '@project/shared/app-types';

export class CreateUpdatePostPhotoRdo {
  postAuthor: IPostAuthor;
  dateCreated: string;
  dateUpdated: string;
  url: string;
  tagsList?: string[];
  type: TPostPhoto;
}
