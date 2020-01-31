import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { DepartamentEntity } from './departament.entity';
import { CreateDepartamentDto } from './dto/departament-dto';
import { DepartamentService } from './departament.service';

@Controller('')
export class DepartamentController {
    constructor(private readonly departamentService: DepartamentService) { }

    @Post('departaments')
    async create(@Body() createDepartamentDto: CreateDepartamentDto) {
        try {
            await this.departamentService.create(createDepartamentDto)
            return ({
                title: "Departamento adicionado com sucesso.",
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get("place/:place/departaments")
    async findAll(@Param() params: { place: number }): Promise<DepartamentEntity[]> {

        return this.departamentService.findAll(params.place);
    }
}
