import { NextResponse } from 'next/server';
import { DepartmentService } from '../service/department.service';
import { initDataSource } from './init';

export async function GET_departments() {
  await initDataSource();
  const data = await DepartmentService.getAll();
  return NextResponse.json(data);
}