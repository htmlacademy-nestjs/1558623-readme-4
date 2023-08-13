import { Module } from '@nestjs/common';
import { ConfigUploaderModule } from '@libs/config-uploader';
import { FileModule } from './file/file.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from '@libs/utils-core';

@Module({
  imports: [ConfigUploaderModule, FileModule, MongooseModule.forRootAsync(getMongooseOptions())],
  controllers: [],
  providers: [],
})
export class AppModule {}
