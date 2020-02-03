import { RoomEntity } from './room.entity';

export const roomsProviders = [
    {
        provide: 'ROOM_REPOSITORY',
        useValue: RoomEntity,
    },
];
