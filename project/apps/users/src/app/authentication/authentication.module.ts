import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '@apps/users-blog-user/blog-user.module';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  imports: [BlogUserModule],
})
export class AuthenticationModule {}
