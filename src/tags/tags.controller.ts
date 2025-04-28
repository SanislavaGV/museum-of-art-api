import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './tag.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tag|null> {
    return this.tagsService.findOne(Number(id));
  }

  @Post()
  create(@Body() tag: Partial<Tag>): Promise<Tag> {
    return this.tagsService.create(tag);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tag: Partial<Tag>): Promise<Tag|null> {
    return this.tagsService.update(Number(id), tag);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.tagsService.delete(Number(id));
  }
}
