import { PlaceEntity } from './place.entity';

export const placeProviders = [
  {
    provide: 'PLACE_REPOSITORY',
    useValue: PlaceEntity,
  },
];
