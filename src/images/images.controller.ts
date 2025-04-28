import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './image.entity';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  findAll(): Promise<Image[]> {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Image|null> {
    return this.imagesService.findOne(Number(id));
  }

  @Post()
  create(@Body() image: Partial<Image>): Promise<Image> {
    return this.imagesService.create(image);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() image: Partial<Image>): Promise<Image|null> {
    return this.imagesService.update(Number(id), image);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.imagesService.delete(Number(id));
  }
}
