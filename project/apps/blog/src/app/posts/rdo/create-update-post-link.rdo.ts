import { IPostAuthor, TPostLink } from '@project/shared/app-types';

export class CreateUpdatePostLinkRdo {
  postAuthor: IPostAuthor;
  dateCreated: string;
  dateUpdated: string;
  url: string;
  description?: string;
  tagsList?: string[];
  type: TPostLink;
}
