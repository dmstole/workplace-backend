import { Controller, Get, Request, Post, UseGuards, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserAdressDto } from './dto/user-dto';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserAdressDto) {
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
