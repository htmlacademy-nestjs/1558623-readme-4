import { Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from '@blog-user/blog-user.memory-repository.js';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {
  }
}
