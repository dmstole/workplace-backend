import { Injectable, Inject } from '@nestjs/common';
import { PlaceEntity } from './place.entity';
import { CreatePlaceAddressDto } from './dto/place-dto';

@Injectable()
export class PlacesService {
    constructor(
        @Inject('PLACES_REPOSITORY') private readonly placesRepository: typeof PlaceEntity,
    ) { }

    create(createPlaceDto: CreatePlaceAddressDto): Promise<PlaceEntity> {
        const place = new PlaceEntity();
        place.name = createPlaceDto.name;
        place.email = createPlaceDto.email;
        place.telephone = createPlaceDto.telephone;

        place.streetName = createPlaceDto.streetName;
        place.addressNumber = createPlaceDto.addressNumber;
        place.complement = createPlaceDto.complement;
        place.postalCode = createPlaceDto.postalCode;
        place.region = createPlaceDto.region;
        place.city = createPlaceDto.city;
        place.state = createPlaceDto.state;

        place.latitude = createPlaceDto.latitude;
        place.longitude = createPlaceDto.longitude;

        place.openingHours = createPlaceDto.openingHours;
        place.closingHours = createPlaceDto.closingHours;
        place.workingDays = createPlaceDto.workingDays;

        return place.save();
    }

    async findAll(): Promise<PlaceEntity[]> {
        return this.placesRepository.findAll<PlaceEntity>();
    }
}
