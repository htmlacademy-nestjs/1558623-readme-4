import { IPostAuthor, TPostText } from '@project/shared/app-types';

export class CreateUpdatePostTextRdo {
  postAuthor: IPostAuthor;
  dateCreated: string;
  dateUpdated: string;
  title: string;
  preview: string;
  textContent: string;
  tagsList?: string[];
  type: TPostText;
}
