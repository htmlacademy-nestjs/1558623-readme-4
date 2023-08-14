import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import uploaderConfig from '@libs/config-uploader';
import { ConfigType } from '@nestjs/config';
import { Express } from 'express';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';
import dayjs from 'dayjs';
import * as crypto from 'crypto';
import { extension } from 'mime-types';
import { FileRepository } from './file.repository';
import { IFile } from '@libs/shared-app-types';
import { FileEntity } from './file.entity';
import { ErrorMessage } from './file.constants';

interface IWrittenFile {
  fileExtension: string;
  path: string;
}

@Injectable()
export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY)
    private readonly config: ConfigType<typeof uploaderConfig>,
    private readonly fileRepository: FileRepository,
  ) {}

  public async writeFile(file: Express.Multer.File): Promise<IWrittenFile> {
    const [year, month] = dayjs().format('YYYY MM').split(' ');
    const { uploadDirectory } = this.config;
    const fileName = crypto.randomUUID();
    const fileExtension = extension(file.mimetype) || '';

    const uploadDirectoryPath = `${uploadDirectory}/${year}/${month}`;
    const filePath = `${uploadDirectoryPath}${fileName}.${fileExtension}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(filePath, file.buffer);

    return {
      path: filePath,
      fileExtension,
    };
  }

  public async saveFile(file: Express.Multer.File): Promise<IFile> {
    const writtenFile = await this.writeFile(file);

    const newFile = new FileEntity({
      size: file.size,
      path: writtenFile.path,
      mimetype: writtenFile.fileExtension,
      originalName: file.originalname,
    });

    return this.fileRepository.create(newFile);
  }

  public async getFile(id: string): Promise<IFile> {
    const existingFile = await this.fileRepository.getById(id);

    if (!existingFile) {
      throw new NotFoundException(ErrorMessage.FileDoesNotExist(id));
    }

    return existingFile;
  }
}
