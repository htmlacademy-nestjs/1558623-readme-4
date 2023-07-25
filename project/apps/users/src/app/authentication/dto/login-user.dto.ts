import { ApiProperty } from '@nestjs/swagger';
import { UserNameLength, UserPasswordLength, UserPropsExample } from '@authentication/authentication.constants';

export class LoginUserDto {
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
    maxLength: UserNameLength.Max,
    example: UserPropsExample.Password,
    required: true,
  })
  password: string;
}
