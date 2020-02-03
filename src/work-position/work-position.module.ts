import { Module } from '@nestjs/common';

import { WorkPositionService } from './work-position.service';
import { workPositionProviders } from './work-position.provider';
import { WorkPositionController } from './work-position.controller';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [WorkPositionService, UserService, ...workPositionProviders],
  controllers: [WorkPositionController],
  exports: [WorkPositionService],
})
export class WorkPositionModule {}
