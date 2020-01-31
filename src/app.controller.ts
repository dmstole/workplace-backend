import { Controller, Get, Request, Response, Post, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './core/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @Post('auth/login')
  async login(@Request() req) {
    try {
      return await this.authService.login(req.body);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
