import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SearchresultsService } from './searchresults.service';
import { SearchResult } from './searchresult.entity';

@Controller('searchresults')
export class SearchresultsController {
  constructor(private readonly searchresultsService: SearchresultsService) {}

  @Get()
  findAll(): Promise<SearchResult[]> {
    return this.searchresultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SearchResult|null> {
    return this.searchresultsService.findOne(Number(id));
  }

  @Post()
  create(@Body() searchResult: Partial<SearchResult>): Promise<SearchResult> {
    return this.searchresultsService.create(searchResult);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() searchResult: Partial<SearchResult>): Promise<SearchResult|null> {
    return this.searchresultsService.update(Number(id), searchResult);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.searchresultsService.delete(Number(id));
  }
}
