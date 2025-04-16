import { AppDataSource } from '../db/data-source';
import { SearchResult } from '../models/search_result';

export const SearchResultRepository = AppDataSource.getRepository(SearchResult);
