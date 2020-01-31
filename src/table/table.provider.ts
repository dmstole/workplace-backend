import { TableEntity } from './table.entity';

export const tablesProviders = [
    {
        provide: 'TABLES_REPOSITORY',
        useValue: TableEntity,
    },
];
