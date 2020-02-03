import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Request, Post, UseGuards, Body, HttpException, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserAddressDto } from './dto/user-dto';

@Controller("users")
export class UserController {
  constructor(private readonly usersService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserAddressDto) {
    try {
      await this.usersService.create(createUserDto);
      return ({
        title: "Conta criada com sucesso.",
        subtitle: "Em breve você receberá uma confirmação no seu email."
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
