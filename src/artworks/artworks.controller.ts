import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { Artwork } from './artwork.entity';

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  findAll(): Promise<Artwork[]> {
    return this.artworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Artwork|null> {
    return this.artworksService.findOne(Number(id));
  }

  @Post()
  create(@Body() artwork: Partial<Artwork>): Promise<Artwork> {
    return this.artworksService.create(artwork);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() artwork: Partial<Artwork>): Promise<Artwork|null> {
    return this.artworksService.update(Number(id), artwork);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.artworksService.delete(Number(id));
  }
}
