import { DepartamentEntity } from './departament.entity';

export const departamentsProviders = [
    {
        provide: 'DEPARTAMENTS_REPOSITORY',
        useValue: DepartamentEntity,
    },
];
