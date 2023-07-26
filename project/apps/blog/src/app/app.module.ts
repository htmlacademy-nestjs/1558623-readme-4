import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [PostsModule, CommentsModule, FeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
