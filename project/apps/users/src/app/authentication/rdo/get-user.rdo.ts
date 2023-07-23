import { Expose } from 'class-transformer';

export class GetUserRdo {
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  createdAt: string;
}
