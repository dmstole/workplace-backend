import { UserEntity } from "src/user/user.entity";
import { WorkPositionEntity } from "./work-position.entity";

export const workPositionProviders = [
  {
    provide: 'WORK_POSITION_REPOSITORY',
    useValue: WorkPositionEntity,
  },
  {
    provide: 'USER_REPOSITORY',
    useValue: UserEntity,
  },
];
