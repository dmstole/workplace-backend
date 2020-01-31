import { Sequelize } from 'sequelize-typescript';

import { PlaceEntity } from 'src/places/place.entity';
import { UserEntity } from 'src/users/user.entity';
import { DepartamentEntity } from 'src/departament/departament.entity';
import { RoomEntity } from 'src/room/room.entity';
import { TableEntity } from 'src/table/table.entity';

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
      sequelize.addModels([PlaceEntity, UserEntity, DepartamentEntity, RoomEntity, TableEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
