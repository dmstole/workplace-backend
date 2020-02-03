import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { TableEntity } from "src/table/table.entity";
import { WorkPositionEntity } from "src/work-position/work-position.entity";
import { DepartamentEntity } from "src/departament/departament.entity";

@Table
export class RoomEntity extends Model<RoomEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @ForeignKey(() => DepartamentEntity)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    departamentId: number;

    @BelongsTo(() => DepartamentEntity)
    departament: DepartamentEntity;

    @HasMany(() => TableEntity)
    tables: TableEntity[];

    @HasMany(() => WorkPositionEntity)
    workPositions: WorkPositionEntity[];
}