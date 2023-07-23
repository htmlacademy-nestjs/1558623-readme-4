import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { fillObject } from '@project/utils/utils-core';
import { CreateUserRdo } from './rdo/create-user.rdo.js';
import { LoginUserDto } from './dto/login-user.dto.js';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {
  }

  @Post('register')
  public async createUser(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(CreateUserRdo, newUser);
  }

  @Post('login')
  public async loginUser(@Body() dto: LoginUserDto) {
    const loggedUser = this.authService.verifyUser(dto);
    return fillObject(LoginUserDto, loggedUser);
  }
}
