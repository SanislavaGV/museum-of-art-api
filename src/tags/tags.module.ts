import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Tag } from './tag.entity';
import { Artwork } from '../artworks/artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, Artwork])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
