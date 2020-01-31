import { Module } from '@nestjs/common';

import { RoomService } from './room.service';
import { roomsProviders } from './room.provider';
import { RoomController } from './room.controle';

@Module({
    providers: [RoomService, ...roomsProviders],
    controllers: [RoomController],
    exports: [RoomService],
})
export class RoomModule { }
