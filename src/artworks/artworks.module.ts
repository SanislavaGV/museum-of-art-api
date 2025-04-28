import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworksService } from './artworks.service';
import { ArtworksController } from './artworks.controller';
import { Artwork } from './artwork.entity';
import { Tag } from '../tags/tag.entity';
import { Image } from '../images/image.entity';
import { Department } from '../departments/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork, Tag, Image, Department])],
  providers: [ArtworksService],
  controllers: [ArtworksController],
})
export class ArtworksModule {}
