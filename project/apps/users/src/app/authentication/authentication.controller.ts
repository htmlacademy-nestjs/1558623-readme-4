import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillObject } from '@project/utils/utils-core';
import { CreateUserRdo } from './rdo/create-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { GetUserRdo } from './rdo/get-user.rdo';
import { LoginUserRdo } from './rdo/login-user.rdo';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async createUser(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(CreateUserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async loginUser(@Body() dto: LoginUserDto) {
    const loggedUser = this.authService.verifyUser(dto);
    return fillObject(LoginUserRdo, loggedUser);
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    const userInfo = await this.authService.getUserById(id);
    return fillObject(GetUserRdo, userInfo);
  }
}
