import { Inject, Injectable } from '@nestjs/common';
import uploaderConfig from '@libs/config-uploader';
import { ConfigType } from '@nestjs/config';
import { Express } from 'express';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';
import dayjs from 'dayjs';
import * as crypto from 'crypto';
import { extension } from 'mime-types';

@Injectable()
export class FileService {
  constructor(
    @Inject(uploaderConfig.KEY)
    private readonly config: ConfigType<typeof uploaderConfig>,
  ) {}

  public async writeFile(file: Express.Multer.File) {
    const [year, month] = dayjs().format('YYYY MM').split(' ');
    const { uploadDirectory } = this.config;
    const fileName = crypto.randomUUID();
    const fileExtension = extension(file.mimetype);

    const uploadDirectoryPath = `${uploadDirectory}/${year}/${month}`;
    const filePath = `${uploadDirectoryPath}${fileName}.${fileExtension}`;

    await ensureDir(uploadDirectoryPath);
    await writeFile(filePath, file.buffer);

    return filePath;
  }
}
