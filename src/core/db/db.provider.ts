import { Sequelize } from 'sequelize-typescript';

import { UserEntity } from 'src/user/user.entity';
import { RoomEntity } from 'src/room/room.entity';
import { TableEntity } from 'src/table/table.entity';
import { PlaceEntity } from 'src/place/place.entity';
import { DepartamentEntity } from 'src/departament/departament.entity';
import { WorkPositionEntity } from 'src/work-position/work-position.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: 'dbWorkPlace',
        dialect: 'sqlite',
        username: 'root',
        password: '',
        storage: ':memory:',
      });
      sequelize.addModels([PlaceEntity, UserEntity, DepartamentEntity, RoomEntity, TableEntity, WorkPositionEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
