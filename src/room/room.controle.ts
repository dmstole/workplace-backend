import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { RoomEntity } from './room.entity';
import { CreateRoomDto } from './dto/room-dto';
import { RoomService } from './room.service';

@Controller('')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Post('rooms')
    async create(@Body() createRoomDto: CreateRoomDto) {
        try {
            await this.roomService.create(createRoomDto)
            return ({
                title: "Roomo adicionado com sucesso.",
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get("departament/:departament/rooms")
    async findAll(@Param() params: { departament: number }): Promise<RoomEntity[]> {

        return this.roomService.findAll(params.departament);
    }
}
