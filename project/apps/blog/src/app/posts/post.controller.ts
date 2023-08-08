import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';
import { fillObject } from '@libs/utils-core';
import { TPostCreateDto, TPostUpdateDto } from './post.types';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  public async getAll(): Promise<PostRdo[]> {
    const posts = await this.postService.getPosts();
    return posts.map((post) => fillObject(PostRdo, post));
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<PostRdo> {
    const existingPost = await this.postService.findById(Number(id));
    return fillObject(PostRdo, existingPost);
  }

  @Delete()
  public async deleteById(@Param('id') id: string): Promise<void> {
    return this.postService.delete(Number(id));
  }

  @Post('create')
  public async create(@Body() dto: TPostCreateDto): Promise<PostRdo> {
    const createdPost = await this.postService.create(dto);
    return fillObject(PostRdo, createdPost);
  }

  @Post('update')
  public async update(@Param('id') id: string, @Body() dto: TPostUpdateDto): Promise<PostRdo> {
    const updatedPost = await this.postService.update(Number(id), dto);
    return fillObject(PostRdo, updatedPost);
  }
}
