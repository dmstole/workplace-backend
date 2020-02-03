import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { placeProviders } from './place.provider';
import { PlaceController } from './place.controller';

@Module({
  providers: [PlaceService, ...placeProviders],
  controllers: [PlaceController],
  exports: [PlaceService],
})
export class PlaceModule {}
