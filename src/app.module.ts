import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './core/db/db.module';
import { PlaceModule } from './place/place.module';
import { DepartamentModule } from './departament/departament.module';
import { RoomModule } from './room/room.module';
import { TableModule } from './table/table.module';
import { WorkPositionModule } from './work-position/work-position.module';
import { CoreModule } from './core/core.module';
import { EmailService } from './core/email/email.service';
import { UtilsService } from './core/utils/utils.service';

@Module({
  imports: [DatabaseModule, AuthModule, PlaceModule, UserModule, DepartamentModule, RoomModule, TableModule, WorkPositionModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, EmailService, UtilsService],
})
export class AppModule {}
