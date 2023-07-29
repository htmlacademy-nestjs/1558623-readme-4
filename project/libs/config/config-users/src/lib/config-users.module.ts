import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';

const USERS_ENV_FILE_PATH = 'apps/users/.users.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: USERS_ENV_FILE_PATH,
      load: [appConfig],
    }),
  ],
})
export class ConfigUsersModule {
}
