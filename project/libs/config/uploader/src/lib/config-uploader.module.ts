import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import uploaderConfig from './uploader.config';
import { appConfig, mongoDbConfig } from '@libs/shared-config';

const ENV_FILE_PATH = 'apps/uploader/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ENV_FILE_PATH,
      load: [appConfig, uploaderConfig, mongoDbConfig],
    }),
  ],
})
export class ConfigUploaderModule {}
