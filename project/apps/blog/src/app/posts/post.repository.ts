import { Injectable } from '@nestjs/common';
import { ICRUDRepository } from '@libs/utils-types';
import { PostEntity } from './post.entity';
import { Post } from '@prisma/client';
import { PrismaService } from '@apps/blog-prisma/prisma.service';

@Injectable()
export class PostRepository implements ICRUDRepository<PostEntity, number, Post> {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(entity: PostEntity): Promise<Post> {
    return this.prismaService.post.create({
      data: { ...entity.toObject() },
    });
  }

  public async update(id: number, entity: PostEntity): Promise<Post | null> {
    return this.prismaService.post.update({
      data: { ...entity.toObject() },
      where: { id },
    });
  }

  public async delete(id: number): Promise<void> {
    this.prismaService.post.delete({
      where: { id },
    });
  }

  public async findById(id: number): Promise<Post | null> {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }

  public async getList(): Promise<Post[] | null> {
    return this.prismaService.post.findMany();
  }
}
