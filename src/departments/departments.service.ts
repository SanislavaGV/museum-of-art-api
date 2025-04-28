import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentsRepository: Repository<Department>,
  ) {}

  findAll(): Promise<Department[]> {
    return this.departmentsRepository.find({ relations: ['artworks'] });
  }

  findOne(id: number): Promise<Department|null> {
    return this.departmentsRepository.findOne({
      where: { departmentId: id },
      relations: ['artworks'],
    });
  }

  create(department: Partial<Department>): Promise<Department> {
    const newDepartment = this.departmentsRepository.create(department);
    return this.departmentsRepository.save(newDepartment);
  }

  async update(id: number, department: Partial<Department>): Promise<Department|null> {
    await this.departmentsRepository.update(id, department);
    return this.departmentsRepository.findOneBy({ departmentId: id });
  }

  delete(id: number): Promise<void> {
    return this.departmentsRepository.delete(id).then(() => {});
  }
}
