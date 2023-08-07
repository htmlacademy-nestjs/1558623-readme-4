import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';
import { fillObject } from '@project/utils/utils-core';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('get/:postId')
  public async getByPostId(@Param('postId') postId: string): Promise<CommentRdo[]> {
    const comments = (await this.commentsService.findManyByPostId(Number(postId))) || [];
    return comments.map((comment) => fillObject(CommentRdo, comment));
  }

  @Post('/create')
  public async create(@Body() dto: CreateCommentDto): Promise<CommentRdo> {
    const comment = await this.commentsService.create(dto);
    return fillObject(CommentRdo, comment);
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string): Promise<void> {
    return this.commentsService.delete(Number(id));
  }
}
