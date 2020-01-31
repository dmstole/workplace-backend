import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './core/db/db.module';
import { PlacesModule } from './places/places.module';
import { DepartamentModule } from './departament/departament.module';
import { RoomModule } from './room/room.module';
import { TableModule } from './table/table.module';

@Module({
  imports: [DatabaseModule, AuthModule, PlacesModule, UsersModule, DepartamentModule, RoomModule, TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
