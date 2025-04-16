import { DepartmentRepository } from '../repositories/department.repo';

export const DepartmentService = {
  getAll: async () => {
    return DepartmentRepository.find();
  },
};