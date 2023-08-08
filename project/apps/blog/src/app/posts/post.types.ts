import { CreatePostPhotoDto } from './dto/create-post-photo.dto';
import { CreatePostLinkDto } from './dto/create-post-link.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostQuoteDto } from './dto/create-post-quote.dto';
import { UpdatePostPhotoDto } from './dto/update-post-photo.dto';
import { UpdatePostLinkDto } from './dto/update-post-link.dto';
import { UpdatePostVideoDto } from './dto/update-post-video.dto';
import { UpdatePostTextDto } from './dto/update-post-text.dto';
import { UpdatePostQuoteDto } from './dto/update-post-quote.dto';

export type TPostCreateDto =
  | CreatePostPhotoDto
  | CreatePostLinkDto
  | CreatePostVideoDto
  | CreatePostTextDto
  | CreatePostQuoteDto;

export type TPostUpdateDto =
  | UpdatePostPhotoDto
  | UpdatePostLinkDto
  | UpdatePostVideoDto
  | UpdatePostTextDto
  | UpdatePostQuoteDto;
