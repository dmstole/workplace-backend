import { Table, Model, Column, HasMany, DataType } from "sequelize-typescript";
import { WorkPositionEntity } from "src/work-position/work-position.entity";

@Table
export class UserEntity extends Model<UserEntity> {

  @Column
  type: string;

  @Column
  name: string;

  @Column
  document: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  accessTried: number;

  @Column
  streetName: string;

  @Column
  addressNumber: number;

  @Column
  region: string;

  @Column
  postalCode: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  codeGenerated: string;

  @Column({
    type: DataType.DATE
  })
  expirationTime: Date;

  @HasMany(() => WorkPositionEntity, "userId")
  workPositions: WorkPositionEntity[];
  
}