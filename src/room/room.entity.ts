import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { TableEntity } from "src/table/table.entity";

@Table
export class RoomEntity extends Model<RoomEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    departamentId: number;

    @HasMany(() => TableEntity, "roomId")
    tables: TableEntity[];
}