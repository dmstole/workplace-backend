import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { DepartamentEntity } from "src/departament/departament.entity";
import { RoomEntity } from "src/room/room.entity";
import { TableEntity } from "src/table/table.entity";
import { UserEntity } from "src/user/user.entity";
import { PlaceEntity } from "src/place/place.entity";

@Table
export class WorkPositionEntity extends Model<WorkPositionEntity> {

    @ForeignKey(() => PlaceEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    placeId: number;

    @BelongsTo(() => PlaceEntity)
    place: PlaceEntity;

    @ForeignKey(() => DepartamentEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    departamentId: number;

    @BelongsTo(() => DepartamentEntity)
    departament: DepartamentEntity;

    @ForeignKey(() => RoomEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    roomId: number;

    @BelongsTo(() => RoomEntity)
    room: RoomEntity;

    @ForeignKey(() => TableEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    tableId: number;

    @BelongsTo(() => TableEntity)
    table: TableEntity;

    @ForeignKey(() => UserEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity; 

    @Column({
        allowNull: false
    })
    total: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    startDate: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    endDate: string;

}