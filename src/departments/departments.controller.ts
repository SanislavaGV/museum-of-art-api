import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './department.entity';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Department|null> {
    return this.departmentsService.findOne(Number(id));
  }

  @Post()
  create(@Body() department: Partial<Department>): Promise<Department> {
    return this.departmentsService.create(department);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() department: Partial<Department>): Promise<Department|null> {
    return this.departmentsService.update(Number(id), department);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.departmentsService.delete(Number(id));
  }
}
