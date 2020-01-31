import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { TableEntity } from './table.entity';
import { CreateTableDto } from './dto/table-dto';
import { TableService } from './table.service';

@Controller('')
export class TableController {
    constructor(private readonly tableService: TableService) { }

    @Post('tables')
    async create(@Body() createTableDto: CreateTableDto) {
        try {
            await this.tableService.create(createTableDto)
            return ({
                title: "Mesa adicionado com sucesso.",
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get("room/:room/tables")
    async findAll(@Param() params: { room: number }): Promise<TableEntity[]> {
        return this.tableService.findAll(params.room);
    }
}
