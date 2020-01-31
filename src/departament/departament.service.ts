import { Injectable, Inject } from '@nestjs/common';

import { DepartamentEntity } from './departament.entity';
import { CreateDepartamentDto } from './dto/departament-dto';

@Injectable()
export class DepartamentService {
    constructor(
        @Inject('DEPARTAMENTS_REPOSITORY') private readonly departamentsRepository: typeof DepartamentEntity,
    ) { }

    create(createPlaceDto: CreateDepartamentDto): Promise<DepartamentEntity> {
        const departament = new DepartamentEntity();
        departament.name = createPlaceDto.name;
        departament.placeId = createPlaceDto.placeId;
        
        return departament.save();
    }

    async findAll(placeId: number): Promise<DepartamentEntity[]> {
        return this.departamentsRepository.findAll<DepartamentEntity>({
            where: {
                placeId: placeId
            }
        });
    }
}
