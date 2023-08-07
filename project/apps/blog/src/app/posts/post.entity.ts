import { IEntity } from '@libs/utils-types';
import { IPost } from '@libs/shared-app-types';
import { PostType } from '@prisma/client';
import { TPostDto } from './post.types';

export class PostEntity implements IEntity<PostEntity, TPostDto>, IPost {
  public id?: number;
  public type!: PostType;
  public postAuthorId!: string;
  public tagsList!: string[];
  public title!: string | null;
  public description!: string | null;
  public url!: string | null;
  public textContent!: string | null;
  public quoteAuthor!: string | null;
  public preview!: string | null;

  constructor(dto: TPostDto) {
    this.fillEntity(dto);
  }

  fillEntity(dto: TPostDto) {
    this.type = dto.type;
    this.postAuthorId = dto.postAuthorId;
    this.tagsList = dto.tagsList ?? [];
    this.title = dto.title ?? null;
    this.description = dto.description ?? null;
    this.url = dto.url ?? null;
    this.textContent = dto.textContent ?? null;
    this.quoteAuthor = dto.quoteAuthor ?? null;
    this.preview = dto.preview ?? null;
  }

  toObject(): PostEntity {
    return { ...this };
  }
}
