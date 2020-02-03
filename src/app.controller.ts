import { Controller, Get, Request, Post, UseGuards, HttpException, HttpStatus, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user/user.service';
import { AuthService } from './core/auth/auth.service';
import { throwError } from './core/exception/throw.error';
import { EmailService } from './core/email/email.service';
import { UtilsService } from './core/utils/utils.service';
import { typesTemplateEmail, RequestEmailModel } from './core/email/email.model';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly emailService: EmailService,
    private readonly userService: UserService,
    private readonly utilsService: UtilsService,
  ) { }

  @Post('auth/login')
  async login(@Request() req) {
    try {
      return await this.authService.login(req.body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('request-reset-password')
  async requestResetPassword(@Body() body: { email: string }) {
    try {
      let user = await this.userService.findOne(body.email);
      throwError(!user, "Email inválido!");

      const codeGenerated = this.utilsService.generateCode();
      user.codeGenerated = codeGenerated;
      
      const template = typesTemplateEmail.requestResetPassword(codeGenerated);
      const requestEmail: RequestEmailModel = {
        email: user.email,
        template
      };

      this.emailService.send(requestEmail);

      user = this.userService.configureExpirationDate(user);
      
      await this.userService.save(user);

      return ({
        title: "Você receberá um email!",
        subtitle: "Nele contém um código para alterar sua senha."
      });

    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('received-code-confirmation')
  async receivedCodeConfirmation(@Body() body: { code: string }) {
    try {
      const user = await this.userService.findOne(null, body.code);
      throwError(!user, "Código inválido!");

      this.userService.validateExpirationDate(user);

      return ({
        title: "Código aceito com sucesso."
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("register-new-password")
  async registerNewPassword(@Body() body: { code: string, password: string }) {
    try {
      const user = await this.userService.findOne(null, body.code);
      throwError(!user, "Código inválido!");

      this.userService.validateExpirationDate(user);

      user.accessTried = 0;
      user.codeGenerated = "-";
      await this.userService.save(user);

      return ({
        title: "Senha atualizada com sucesso."
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
