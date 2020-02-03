import { Op } from 'sequelize';
import { Injectable, Inject } from '@nestjs/common';

import { PlaceEntity } from './place.entity';
import { CreatePlaceAddresDto } from './dto/place-dto';

@Injectable()
export class PlaceService {
    constructor(
        @Inject('PLACE_REPOSITORY') private readonly placeRepository: typeof PlaceEntity,
    ) { }

    create(createPlaceDto: CreatePlaceAddresDto): Promise<PlaceEntity> {

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

    async findAll({ key }: { key: string }): Promise<PlaceEntity[]> {

        const where = !!key
            ? {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${key}%`
                        }
                    },
                    {
                        city: {
                            [Op.like]: `%${key}%`
                        }
                    }
                ]
            }
            : null;

        return this.placeRepository.findAll<PlaceEntity>({ where });
    }
}
