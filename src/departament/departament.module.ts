import { Module } from '@nestjs/common';

import { DepartamentService } from './departament.service';
import { departamentsProviders } from './departament.provider';
import { DepartamentController } from './departament.controller';

@Module({
    providers: [DepartamentService, ...departamentsProviders],
    controllers: [DepartamentController],
    exports: [DepartamentService],
})
export class DepartamentModule { }
