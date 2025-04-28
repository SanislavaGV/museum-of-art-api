import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchresultsService } from './searchresults.service';
import { SearchresultsController } from './searchresults.controller';
import { SearchResult } from './searchresult.entity';
import { Artwork } from '../artworks/artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SearchResult, Artwork])],
  controllers: [SearchresultsController],
  providers: [SearchresultsService],
})
export class SearchresultsModule {}
