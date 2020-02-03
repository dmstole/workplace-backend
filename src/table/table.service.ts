import { Injectable, Inject } from '@nestjs/common';

import { TableEntity } from './table.entity';
import { CreateTableDto } from './dto/table-dto';

@Injectable()
export class TableService {
    constructor(
        @Inject('TABLE_REPOSITORY') private readonly tablesRepository: typeof TableEntity,
    ) { }

    create(createPlaceDto: CreateTableDto): Promise<TableEntity> {
        const table = new TableEntity();
        table.name = createPlaceDto.name;
        table.roomId = createPlaceDto.roomId;
        
        return table.save();
    }

    async findAll(roomId: number): Promise<TableEntity[]> {
        return this.tablesRepository.findAll<TableEntity>({
            where: {
                roomId: roomId
            }
        });
    }
}
