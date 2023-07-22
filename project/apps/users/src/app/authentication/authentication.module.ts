import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '@blog-user/blog-user.module.js';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  imports: [BlogUserModule]
})
export class AuthenticationModule {
}
