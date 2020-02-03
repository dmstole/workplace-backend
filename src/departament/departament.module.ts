import { Module } from '@nestjs/common';

import { DepartamentService } from './departament.service';
import { departamentProviders } from './departament.provider';
import { DepartamentController } from './departament.controller';

@Module({
    providers: [DepartamentService, ...departamentProviders],
    controllers: [DepartamentController],
    exports: [DepartamentService],
})
export class DepartamentModule { }
