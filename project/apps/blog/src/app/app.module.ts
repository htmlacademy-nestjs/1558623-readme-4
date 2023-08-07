import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { FeedModule } from './feed/feed.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigUsersModule } from '@libs/config-users';

@Module({
  imports: [PostsModule, CommentsModule, FeedModule, PrismaModule, ConfigUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
