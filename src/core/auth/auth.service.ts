import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { throwError } from '../exception/throw.error';
import { UsersService } from '../../users/users.service';
import { LoginInterface } from 'src/interfaces/login.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(data: LoginInterface) {
    const payload = { username: data.email, password: data.password };
    const user = await this.validateUser(data.email, data.password);
    
    throwError(!user, "Dados inválidos. Tente novamente ou crie uma nova conta.");

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
