import { TableEntity } from './table.entity';

export const tablesProviders = [
    {
        provide: 'TABLE_REPOSITORY',
        useValue: TableEntity,
    },
];
