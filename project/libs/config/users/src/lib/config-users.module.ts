import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongoDbConfig from './mongo-db.config';
import appConfig from '@libs/shared-app-config';

const USERS_ENV_FILE_PATH = 'apps/users/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: USERS_ENV_FILE_PATH,
      load: [appConfig, mongoDbConfig],
    }),
  ],
})
export class ConfigUsersModule {}
