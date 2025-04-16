import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtworksController } from './artworks/artworks.controller';

@Module({
  imports: [],
  controllers: [AppController, ArtworksController],
  providers: [AppService],
})
export class AppModule {}
