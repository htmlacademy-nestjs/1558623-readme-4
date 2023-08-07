import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from '@libs/shared-app-config';

const BLOG_ENV_FILE_PATH = 'apps/blog/.env';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: BLOG_ENV_FILE_PATH,
    load: [appConfig]
  })]
})
export class ConfigBlogModule {}
