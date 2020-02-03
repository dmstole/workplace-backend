import { Injectable, Inject } from '@nestjs/common';

import { WorkPositionEntity } from './work-position.entity';
import { CreateWorkPositionDto } from './dto/work-position-dto';
import { DepartamentEntity } from 'src/departament/departament.entity';
import { RoomEntity } from 'src/room/room.entity';
import { TableEntity } from 'src/table/table.entity';
import { PlaceEntity } from 'src/place/place.entity';

@Injectable()
export class WorkPositionService {

    constructor(
        @Inject('WORK_POSITION_REPOSITORY') private readonly workPositionRepository: typeof WorkPositionEntity,
    ) { }

    findByUser(user: number): Promise<WorkPositionEntity[] | undefined> {
        return this.workPositionRepository.findAll({
            where: {
                userId: user
            },
            include: [
                {
                    model: PlaceEntity,
                    attributes: ["name"],
                    required: true,
                    foreignKey: "placeId"
                },
                {
                    model: DepartamentEntity,
                    attributes: ["name"],
                    required: true,
                    foreignKey: "departamentId"
                },
                {
                    model: RoomEntity,
                    attributes: ["name"],
                    required: true,
                    foreignKey: "roomId"
                },
                {
                    model: TableEntity,
                    attributes: ["name"],
                    required: true,
                    foreignKey: "tableId"
                }
            ]
        });
    }

    async create(data: CreateWorkPositionDto) {

        const workPosition = new WorkPositionEntity();
        workPosition.placeId = data.place;
        workPosition.departamentId = data.departament;
        workPosition.roomId = data.room;
        workPosition.tableId = data.table;
        workPosition.total = data.totalWorkPositions;
        workPosition.startDate = data.startDate;
        workPosition.endDate = data.endDate;
        workPosition.userId = data.user;

        return workPosition.save();
    }
}
