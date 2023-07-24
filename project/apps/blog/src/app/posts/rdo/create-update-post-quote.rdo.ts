import { IPostAuthor, TPostQuote } from '@project/shared/app-types';

export class CreateUpdatePostQuoteRdo {
  postAuthor: IPostAuthor;
  dateCreated: string;
  dateUpdated: string;
  textContent: string;
  quoteAuthor: string;
  tagsList?: string[];
  type: TPostQuote;
}
