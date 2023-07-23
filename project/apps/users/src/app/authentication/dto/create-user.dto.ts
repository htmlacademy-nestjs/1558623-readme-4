import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    minLength: 3,
    maxLength: 50,
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'Valid user email',
    example: 'faker@fake.co',
    uniqueItems: true,
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'Password',
    minLength: 6,
    maxLength: 12,
    required: true,
  })
  password: string;

  @ApiProperty({
    description: 'User avatar path',
    example: 'user/avatar.jpg',
    required: false,
  })
  avatar?: string;
}
