import { NextResponse } from 'next/server';
import { ImageService } from '../service/image.service';
import { initDataSource } from './init';

export async function GET_images() {
  await initDataSource();
  const data = await ImageService.getAll();
  return NextResponse.json(data);
}