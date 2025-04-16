import { SearchResultRepository } from '../repositories/search_result.repo';

export const SearchResultService = {
  getAll: async () => {
    return SearchResultRepository.find();
  },
};