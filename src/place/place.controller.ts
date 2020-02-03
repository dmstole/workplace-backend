import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, HttpException, HttpStatus, UseGuards, Query } from '@nestjs/common';

import { PlaceEntity } from './place.entity';
import { CreatePlaceAddresDto } from './dto/place-dto';
import { PlaceService as PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createPlaceDto: CreatePlaceAddresDto) {
    try {
      await this.placeService.create(createPlaceDto)
      return ({
        title: "Obrigado por nos informar este local.",
        subtitle: "Iremos avaliar para disponibilizarmos."
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Query() query: { key: string }): Promise<PlaceEntity[]> {
    try {
      return this.placeService.findAll(query);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
