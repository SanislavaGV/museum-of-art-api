import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { Image } from './image.entity';
import { Artwork } from '../artworks/artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, Artwork])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
