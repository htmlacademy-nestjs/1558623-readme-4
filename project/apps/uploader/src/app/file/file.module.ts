import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModel, FileSchema } from './file.model';
import { FileRepository } from './file.repository';
import { join } from 'node:path';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const rootPath = configService.get('uploader.uploadDirectory');
        return [
          {
            rootPath,
            serveRoot: join(__dirname, 'static'),
            serveStaticOptions: {
              fallthrough: true,
              etag: true,
            },
          },
        ];
      },
    }),
    MongooseModule.forFeature([
      {
        name: FileModel.name,
        schema: FileSchema,
      },
    ]),
  ],
  controllers: [FileController],
  providers: [FileService, FileRepository],
})
export class FileModule {}
