import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IFile } from '@libs/shared-app-types';

@Schema({
  collection: 'files',
  timestamps: true,
})
export class FileModel extends Document implements IFile {
  @Prop({ required: true })
  originalName!: string;

  @Prop({ required: true })
  size!: number;

  @Prop({ required: true })
  mimetype!: string;

  @Prop({ required: true })
  hashName!: string;

  @Prop({ required: true })
  path!: string;
}

export const FileSchema = SchemaFactory.createForClass(FileModel);
