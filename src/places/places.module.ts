import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { placesProviders } from './places.provider';
import { PlacesController } from './place.controller';

@Module({
  providers: [PlacesService, ...placesProviders],
  controllers: [PlacesController],
  exports: [PlacesService],
})
export class PlacesModule {}
