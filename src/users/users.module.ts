import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './user.provider';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
