import { Injectable, Inject } from '@nestjs/common';

import { UserEntity } from './user.entity';
import { CreateUserDto, CreateUserAdressDto } from './dto/user-dto';
import { throwError } from 'src/core/exception/throw.error';
import { CreateAddressDto } from 'src/address/dto/address.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof UserEntity,
  ) {
  }

  findOne(email: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne<UserEntity>({
      where: {
        email
      }
    });
  }

  async create(data: CreateUserAdressDto) {

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

    return user.save();
  }
}
