import { ApiProperty } from '@nestjs/swagger';
import { UserPropsExample, UserNameLength, UserPasswordLength } from '@authentication/authentication.constants';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    minLength: UserNameLength.Min,
    maxLength: UserNameLength.Max,
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'Valid user email',
    example: UserPropsExample.Email,
    uniqueItems: true,
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'Password',
    minLength: UserPasswordLength.Min,
    maxLength: UserPasswordLength.Max,
    example: UserPropsExample.Password,
    required: true,
  })
  password: string;

  @ApiProperty({
    description: 'User avatar path',
    example: UserPropsExample.AvatarPath,
    required: false,
  })
  avatar?: string;
}
