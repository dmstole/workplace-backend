import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';

import { DepartamentEntity } from './departament.entity';
import { DepartamentService } from './departament.service';
import { CreateDepartamentDto } from './dto/departament-dto';

@Controller('')
export class DepartamentController {
    constructor(private readonly departamentService: DepartamentService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('departaments')
    async create(@Body() createDepartamentDto: CreateDepartamentDto) {
        try {
            await this.departamentService.create(createDepartamentDto)
            return ({
                title: "Departamento adicionado com sucesso.",
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("place/:place/departaments")
    async findAll(@Param() params: { place: number }): Promise<DepartamentEntity[]> {
        try {
            return this.departamentService.findAll(params.place);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
