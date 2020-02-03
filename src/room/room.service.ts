import { Injectable, Inject } from '@nestjs/common';

import { RoomEntity } from './room.entity';
import { CreateRoomDto } from './dto/room-dto';

@Injectable()
export class RoomService {
    constructor(
        @Inject('ROOM_REPOSITORY') private readonly roomsRepository: typeof RoomEntity,
    ) { }

    create(createPlaceDto: CreateRoomDto): Promise<RoomEntity> {
        const room = new RoomEntity();
        room.name = createPlaceDto.name;
        room.departamentId = createPlaceDto.departamentId;
        
        return room.save();
    }

    async findAll(departamentId: number): Promise<RoomEntity[]> {
        return this.roomsRepository.findAll<RoomEntity>({
            where: {
                departamentId: departamentId
            }
        });
    }
}
