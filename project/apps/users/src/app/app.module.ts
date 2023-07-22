import { Module } from '@nestjs/common';
import { BlogUserModule } from '@blog-user/blog-user.module.js';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [BlogUserModule, AuthenticationModule],
  controllers: [],
  providers: []
})
export class AppModule {
}
