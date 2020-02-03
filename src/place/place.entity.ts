import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { DepartamentEntity } from "src/departament/departament.entity";
import { WorkPositionEntity } from "src/work-position/work-position.entity";

@Table
export class PlaceEntity extends Model<PlaceEntity> {

  @Column
  name: string;

  @Column
  telephone: string;

  @Column
  email: string;

  @Column
  streetName: string;

  @Column
  addressNumber: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  complement?: string;

  @Column
  postalCode: string;

  @Column
  region: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column({
    allowNull: true,
    type: DataType.FLOAT,
  })
  latitude?: number;

  @Column({
    allowNull: true,
    type: DataType.FLOAT,
  })
  longitude?: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  openingHours: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  closingHours: string;

  @Column
  workingDays: string;

  @HasMany(() => DepartamentEntity)
  departaments: DepartamentEntity[];

  @HasMany(() => WorkPositionEntity)
  workPositions: WorkPositionEntity[];

}