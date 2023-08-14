import { IEntity } from '@libs/utils-types';
import { IFile } from '@libs/shared-app-types';

export class FileEntity implements IEntity<FileEntity, IFile>, IFile {
  id?: string;
  originalName!: string;
  size!: number;
  mimetype!: string;
  path!: string;

  constructor(file: IFile) {
    this.fillEntity(file);
  }

  public fillEntity(file: IFile) {
    this.id = file.id;
    this.path = file.path;
    this.size = file.size;
    this.mimetype = file.mimetype;
    this.originalName = file.originalName;
  }

  public toObject(): FileEntity {
    return this;
  }
}
