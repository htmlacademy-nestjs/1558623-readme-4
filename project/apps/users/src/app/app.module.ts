import { Module } from '@nestjs/common';
import { BlogUserModule } from '@blog-user/blog-user.module';
import { AuthenticationModule } from '@authentication/authentication.module';
import { ConfigUsersModule } from '@config-users';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from '@config-users';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigUsersModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
