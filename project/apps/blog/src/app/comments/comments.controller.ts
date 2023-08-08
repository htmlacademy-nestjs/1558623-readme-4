import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';
import { fillObject } from '@libs/utils-core';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  public async getByPostId(@Query('postId') postId: string): Promise<CommentRdo[]> {
    const comments = (await this.commentsService.findManyByPostId(Number(postId))) || [];
    return comments.map((comment) => fillObject(CommentRdo, comment));
  }

  @Post('create')
  public async create(@Body() dto: CreateCommentDto): Promise<CommentRdo> {
    const comment = await this.commentsService.create(dto);
    return fillObject(CommentRdo, comment);
  }

  @Delete('delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Query('id') id: string): Promise<void> {
    return this.commentsService.delete(Number(id));
  }
}
