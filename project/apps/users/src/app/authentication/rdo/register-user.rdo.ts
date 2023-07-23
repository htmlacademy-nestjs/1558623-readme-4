import { Expose } from 'class-transformer';

export class RegisterUserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public emailVerificationLink: string;
}
