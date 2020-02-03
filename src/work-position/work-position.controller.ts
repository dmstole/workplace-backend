import { AuthGuard } from '@nestjs/passport';
import { Controller, Request, Post, UseGuards, Body, HttpException, HttpStatus, Get } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { WorkPositionService } from './work-position.service';
import { CreateWorkPositionDto } from './dto/work-position-dto';

@Controller("")
export class WorkPositionController {
    constructor(
        private readonly userService: UserService,
        private readonly workPositionService: WorkPositionService,
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Post("work-positions")
    async create(@Request() req, @Body() createWorkPositionDto: CreateWorkPositionDto) {
        try {
            const user = await this.userService.findOne(req.user.email);
            createWorkPositionDto.user = user.id;
            await this.workPositionService.create(createWorkPositionDto);
            return ({
                title: "Reserva da sala realizada com sucesso.",
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("reservations")
    async get(@Request() req) {
        try {
            const user = await this.userService.findOne(req.user.email);
            return await this.workPositionService.findByUser(user.id);
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
