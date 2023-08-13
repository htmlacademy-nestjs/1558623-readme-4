import { Module } from '@nestjs/common';
import { ConfigUploaderModule } from '@libs/config-uploader';
import { FileModule } from './file/file.module';

@Module({
  imports: [ConfigUploaderModule, FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
