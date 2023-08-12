import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from '@libs/shared-app-config';
import uploaderConfig from './uploader.config';

const ENV_FILE_PATH = 'apps/uploader/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ENV_FILE_PATH,
      load: [appConfig, uploaderConfig],
    }),
  ],
})
export class ConfigUploaderModule {}
