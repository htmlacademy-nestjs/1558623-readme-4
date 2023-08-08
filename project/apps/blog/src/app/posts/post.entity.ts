import { IEntity } from '@libs/utils-types';
import { Post, PostType } from '@prisma/client';

export class PostEntity implements IEntity<PostEntity, Partial<Post>>, Partial<Post> {
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
  public likesCount?: number;

  constructor(dto: Partial<Post>) {
    this.fillEntity(dto);
  }

  fillEntity(dto: Partial<Post>) {
    this.type = dto.type as PostType;
    this.tagsList = dto.tagsList ?? [];
    this.title = dto.title ?? null;
    this.description = dto.description ?? null;
    this.url = dto.url ?? null;
    this.textContent = dto.textContent ?? null;
    this.quoteAuthor = dto.quoteAuthor ?? null;
    this.preview = dto.preview ?? null;
    this.likesCount = dto.likesCount ?? 0;
    if (dto.postAuthorId) {
      this.postAuthorId = dto.postAuthorId;
    }
  }

  toObject(): PostEntity {
    return { ...this };
  }
}
