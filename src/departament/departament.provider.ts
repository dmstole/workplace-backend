import { DepartamentEntity } from './departament.entity';

export const departamentProviders = [
    {
        provide: 'DEPARTAMENT_REPOSITORY',
        useValue: DepartamentEntity,
    },
];
