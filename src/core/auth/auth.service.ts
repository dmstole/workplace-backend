import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { throwError } from '../exception/throw.error';
import { UserService } from '../../user/user.service';
import { LoginInterface } from 'src/interfaces/login.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!!user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    user.accessTried++;
    await this.usersService.save(user);
    throwError(user.accessTried >= 5, "Acesso bloqueado");

    return null;
  }

  async login(data: LoginInterface) {
    const payload = { email: data.email, password: data.password };
    const user = await this.validateUser(data.email, data.password);
    throwError(!user, "Dados inválidos. Tente novamente ou crie uma nova conta.");

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
