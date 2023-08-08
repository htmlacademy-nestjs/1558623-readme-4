import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';
import { fillObject } from '@libs/utils-core';
import { TPostCreateDto, TPostUpdateDto } from './post.types';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

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
  public async create(@Body() dto: TPostCreateDto) {
    return await this.postService.create(dto);
  }

  @Post('update')
  public async update(@Param('id') id: string, @Body() dto: TPostUpdateDto) {
    return this.postService.update(Number(id), dto);
  }
}
