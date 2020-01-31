import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { RoomEntity } from "src/room/room.entity";

@Table
export class DepartamentEntity extends Model<DepartamentEntity> {

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    placeId: number;

    @HasMany(() => RoomEntity, "departamentId")
    rooms: RoomEntity[];

}