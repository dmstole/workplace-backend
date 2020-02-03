import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';

import { RoomEntity } from './room.entity';
import { CreateRoomDto } from './dto/room-dto';
import { RoomService } from './room.service';

@Controller('')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('rooms')
    async create(@Body() createRoomDto: CreateRoomDto) {
        try {
            await this.roomService.create(createRoomDto)
            return ({
                title: "Room adicionado com sucesso.",
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("departament/:departament/rooms")
    async findAll(@Param() params: { departament: number }): Promise<RoomEntity[]> {
        try {
            return this.roomService.findAll(params.departament);
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
