import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileModel } from './file.model';
import { Model } from 'mongoose';
import { IFile } from '@libs/shared-app-types';
import { FileEntity } from './file.entity';

@Injectable()
export class FileRepository {
  constructor(
    @InjectModel(FileModel.name)
    private readonly fileModel: Model<FileModel>,
  ) {}

  public async create(file: FileEntity): Promise<IFile> {
    const newFile = new this.fileModel(file);
    return newFile.save();
  }

  public async getById(id: string): Promise<IFile | null> {
    return this.fileModel.findOne({ _id: id }).exec();
  }
}
