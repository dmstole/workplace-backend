import { Module } from '@nestjs/common';

import { TableService } from './table.service';
import { tablesProviders } from './table.provider';
import { TableController } from './table.controller';

@Module({
    providers: [TableService, ...tablesProviders],
    controllers: [TableController],
    exports: [TableService],
})
export class TableModule { }
