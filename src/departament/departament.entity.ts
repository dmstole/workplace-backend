import { Table, Model, Column, DataType, HasMany, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { RoomEntity } from "src/room/room.entity";
import { WorkPositionEntity } from "src/work-position/work-position.entity";
import { PlaceEntity } from "src/place/place.entity";

@Table
export class DepartamentEntity extends Model<DepartamentEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @ForeignKey(() => PlaceEntity)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    placeId: number;

    @BelongsTo(() => PlaceEntity)
    place: PlaceEntity;

    @HasMany(() => RoomEntity)
    rooms: RoomEntity[];

    @HasMany(() => WorkPositionEntity)
    workPositions: WorkPositionEntity[];

}