import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModule } from '@apps/users-blog-user/blog-user.module';
import { AuthenticationModule } from '@apps/users-authentication/authentication.module';
import { ConfigUsersModule, getMongooseOptions } from '@libs/config-users';

@Module({
  controllers: [],
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  providers: [],
})
export class AppModule {}
