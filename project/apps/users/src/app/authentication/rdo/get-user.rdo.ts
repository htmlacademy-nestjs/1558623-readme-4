import { Expose } from 'class-transformer';

export class GetUserRdo {
  @Expose({name: '_id'})
  id: string;

  @Expose()
  createdAt: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  avatar: string;
}
