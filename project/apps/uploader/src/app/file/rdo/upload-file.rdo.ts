import { Expose, Transform } from 'class-transformer';

export class UploadFileRdo {
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id.toString())
  id!: string;

  @Expose()
  mimetype!: string;

  @Expose()
  originalName!: string;

  @Expose()
  size!: number;
}
