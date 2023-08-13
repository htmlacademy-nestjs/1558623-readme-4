import { Inject, Injectable } from '@nestjs/common';
import uploaderConfig from '@libs/config-uploader';
import { ConfigType } from '@nestjs/config';
import { Express } from 'express';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';

@Injectable()
export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY) private readonly config: ConfigType<typeof uploaderConfig>,
  ) {}

  public async writeFile(file: Express.Multer.File) {
    const uploadDirectoryPath = this.config.uploadDirectory;
    const filePath = `${uploadDirectoryPath}${file.originalname}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(filePath, file.buffer);

    return filePath;
  }
}
