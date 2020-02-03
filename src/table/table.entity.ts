import { Table, Model, Column, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { WorkPositionEntity } from "src/work-position/work-position.entity";
import { RoomEntity } from "src/room/room.entity";

@Table
export class TableEntity extends Model<TableEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @Column
    totalPosition: number;

    @ForeignKey(() => RoomEntity)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    roomId: number;

    @BelongsTo(() => RoomEntity)
    room: RoomEntity;

    @HasMany(() => WorkPositionEntity)
    workPositions: WorkPositionEntity[];

}