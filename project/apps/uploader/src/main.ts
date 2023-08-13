import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  const configService = app.get(ConfigService);
  const mode = configService.getOrThrow('app.environment');
  const port = configService.getOrThrow('app.port');
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`✌️  Application is running in ${mode} mode`);
}

void bootstrap();
