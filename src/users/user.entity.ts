import { Table, Model, Column } from "sequelize-typescript";

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
  
}