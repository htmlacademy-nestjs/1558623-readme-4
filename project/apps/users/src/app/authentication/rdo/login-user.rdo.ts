import { Expose } from 'class-transformer';

export class LoginUserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public avatar: string;

  @Expose()
  public accessToken: string;
}
