import { Controller, Get } from '@nestjs/common';

@Controller('artworks')
export class ArtworksController {

  @Get()
  getHello(): string {
    return "Hello from artworks";
  }
}
