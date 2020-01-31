import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class TableEntity extends Model<TableEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    roomId: number;

}