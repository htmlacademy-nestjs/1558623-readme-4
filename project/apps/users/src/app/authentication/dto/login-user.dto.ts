import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
}
