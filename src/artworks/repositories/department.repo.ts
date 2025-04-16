import { AppDataSource } from '../db/data-source';
import { Department } from '../models/department';

export const DepartmentRepository = AppDataSource.getRepository(Department);