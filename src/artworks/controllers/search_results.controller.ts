import { NextResponse } from 'next/server';
import { SearchResultService } from '../service/search_result.service';
import { initDataSource } from './init';

export async function GET_search_results() {
  await initDataSource();
  const data = await SearchResultService.getAll();
  return NextResponse.json(data);
}