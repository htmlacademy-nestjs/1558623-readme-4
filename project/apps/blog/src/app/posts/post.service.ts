import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { TPostCreateDto, TPostUpdateDto } from './post.types';
import { Post } from '@prisma/client';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  public async create(dto: TPostCreateDto): Promise<Post> {
    return await this.postRepository.create(new PostEntity(dto));
  }

  public async update(id: number, dto: TPostUpdateDto): Promise<Post | null> {
    const existingPost = await this.postRepository.findById(id);
    const updatedEntity = new PostEntity({ ...existingPost, ...dto });
    return await this.postRepository.update(id, updatedEntity);
  }

  public async delete(id: number): Promise<void> {
    return await this.postRepository.delete(id);
  }

  public async findById(id: number): Promise<Post | null> {
    return await this.postRepository.findById(id);
  }

  public async getPosts(): Promise<Post[]> {
    return (await this.postRepository.getList()) || [];
  }
}
