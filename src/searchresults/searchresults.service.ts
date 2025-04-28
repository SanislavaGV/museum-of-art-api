import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchResult } from './searchresult.entity';

@Injectable()
export class SearchresultsService {
  constructor(
    @InjectRepository(SearchResult)
    private searchresultsRepository: Repository<SearchResult>,
  ) {}

  findAll(): Promise<SearchResult[]> {
    return this.searchresultsRepository.find({ relations: ['artwork'] });
  }

  findOne(id: number): Promise<SearchResult|null> {
    return this.searchresultsRepository.findOne({
      where: { searchId: id },
      relations: ['artwork'],
    });
  }

  create(searchResult: Partial<SearchResult>): Promise<SearchResult> {
    const newSearchResult = this.searchresultsRepository.create(searchResult);
    return this.searchresultsRepository.save(newSearchResult);
  }

  async update(id: number, searchResult: Partial<SearchResult>): Promise<SearchResult|null> {
    await this.searchresultsRepository.update(id, searchResult);
    return this.searchresultsRepository.findOneBy({ searchId: id });
  }

  delete(id: number): Promise<void> {
    return this.searchresultsRepository.delete(id).then(() => {});
  }
}
