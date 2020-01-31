import { PlaceEntity } from './place.entity';

export const placesProviders = [
  {
    provide: 'PLACES_REPOSITORY',
    useValue: PlaceEntity,
  },
];
