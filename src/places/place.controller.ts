import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PlaceEntity } from './place.entity';
import { CreatePlaceAddressDto } from './dto/place-dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) { }

  @Post()
  async create(@Body() createPlaceDto: CreatePlaceAddressDto) {
    try {
      await this.placesService.create(createPlaceDto)
      return ({
        title: "Obrigado por nos informar este local.",
        subtitle: "Iremos avaliar para disponibilizarmos."
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<PlaceEntity[]> {
    return this.placesService.findAll();
  }
}
