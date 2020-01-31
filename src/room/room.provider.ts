import { RoomEntity } from './room.entity';

export const roomsProviders = [
    {
        provide: 'ROOMS_REPOSITORY',
        useValue: RoomEntity,
    },
];
