import { ICRUDRepository } from '@project/utils/utils-types';
import { PrismaService } from '../prisma/prisma.service';
import { CommentEntity } from './comment.entity';
import { IComment } from '@project/shared/app-types';

export class CommentsRepository implements ICRUDRepository<CommentEntity, number, IComment> {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(comment: CommentEntity): Promise<IComment> {
    return this.prismaService.comment.create({
      data: {
        ...comment.toObject(),
      },
    });
  }

  public async delete(id: number): Promise<void> {
    await this.prismaService.comment.delete({
      where: { id },
    });
  }

  public async findById(id: number): Promise<IComment | null> {
    return this.prismaService.comment.findUnique({
      where: { id },
    });
  }
}
