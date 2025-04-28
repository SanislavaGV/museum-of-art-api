import { Test, TestingModule } from '@nestjs/testing';
import { SearchresultsController } from './searchresults.controller';

describe('SearchresultsController', () => {
  let controller: SearchresultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchresultsController],
    }).compile();

    controller = module.get<SearchresultsController>(SearchresultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
