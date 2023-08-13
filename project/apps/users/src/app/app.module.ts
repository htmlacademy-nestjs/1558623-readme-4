import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModule } from '@apps/users-blog-user/blog-user.module';
import { AuthenticationModule } from '@apps/users-authentication/authentication.module';
import { ConfigUsersModule } from '@libs/config-users';
import { getMongooseOptions } from '@libs/utils-core';

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
