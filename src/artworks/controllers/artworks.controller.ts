import { NextRequest, NextResponse } from 'next/server';
import { ArtworkService } from '../service/artwork.service';
import { initDataSource } from './init';

export async function GET_artworks() {
  await initDataSource();
  const data = await ArtworkService.getAll();
  return NextResponse.json(data);
}

export async function GET_artworks_id(req: NextRequest, { params }: { params: { id: string } }) {
  await initDataSource();
  const artwork = await ArtworkService.getById(parseInt(params.id));
  if (!artwork) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(artwork);
}
