import { Expose } from 'class-transformer';

export class CreateUserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  avatar: string;

  @Expose()
  accessToken: string;
}
