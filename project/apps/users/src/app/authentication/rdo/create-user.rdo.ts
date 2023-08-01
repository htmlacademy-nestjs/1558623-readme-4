import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRdo {
  @ApiProperty({
    description: 'User unique id',
    example: '7a1d9f35-9c08-4587-befa-3e8bbefd772e',
  })
  @Expose({ name: '_id' })
  id!: string;

  @ApiProperty({
    description: 'Valid user email',
    example: 'faker@fake.co',
  })
  @Expose()
  email!: string;

  @ApiProperty({
    description: 'User name',
    minLength: 3,
    maxLength: 50,
  })
  @Expose()
  name!: string;

  @ApiProperty({
    description: 'User avatar path',
    example: 'user/avatar.jpg',
  })
  @Expose()
  avatar?: string;

  @ApiProperty({
    description: 'JWT access token',
  })
  @Expose()
  accessToken!: string;
}
