import { NextResponse } from 'next/server';
import { ArtworkTagService } from '../service/artwork_tag.service';
import { initDataSource } from './init';

export async function GET_artwork_tags() {
  await initDataSource();
  const data = await ArtworkTagService.getAll();
  return NextResponse.json(data);
}