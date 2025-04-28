import { Test, TestingModule } from '@nestjs/testing';
import { SearchresultsService } from './searchresults.service';

describe('SearchresultsService', () => {
  let service: SearchresultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchresultsService],
    }).compile();

    service = module.get<SearchresultsService>(SearchresultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
