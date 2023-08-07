import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { ConfigUsersModule } from '@libs/config-users';
import { PrismaModule } from '@apps/blog-prisma/prisma.module';

@Module({
  imports: [ConfigUsersModule, CommentsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
