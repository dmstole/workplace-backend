import { Injectable, Inject } from '@nestjs/common';
import * as moment from "moment";

import { UserEntity } from './user.entity';
import { CreateUserAddressDto } from './dto/user-dto';
import { throwError } from 'src/core/exception/throw.error';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof UserEntity,
  ) {
  }

  async findOne(email: string = null, code: string = null): Promise<UserEntity | undefined> {
    const where: any = {};

    if (!!email) {
      where.email = email;
    }

    if (!!code) {
      where.codeGenerated = code;
    }

    const user = await this.userRepository.findOne<UserEntity>({ where });

    return user;
  }

  async create(data: CreateUserAddressDto) {

    const userExist = await this.findOne(data.email);

    throwError(!!userExist, "Existe uma conta com este email.");

    const user = new UserEntity();
    user.email = data.email;
    user.name = data.name;
    user.password = data.password;
    user.accessTried = 0;
    user.type = data.type;
    user.document = data.document;
    user.streetName = data.streetName;
    user.addressNumber = data.addressNumber;
    user.region = data.region;
    user.city = data.city;
    user.postalCode = data.postalCode;
    user.state = data.state;

    return this.save(user);
  }

  save(user: UserEntity) {
    return user.save();
  }

  validateExpirationDate(user: UserEntity) {
    const actualDate = moment().toDate();
    throwError(actualDate > user.expirationTime, "Código expirado, solicite nova senha.");
  }

  configureExpirationDate(user: UserEntity) {
    const expirationTime = moment().add(1, "minute").toDate();
    user.expirationTime = expirationTime;

    return user;
  }
}
