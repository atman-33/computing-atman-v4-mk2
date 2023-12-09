import { Test, TestingModule } from '@nestjs/testing';
import { SampleTodosService } from './sample-todos.service';

describe('SampleTodosService', () => {
  let service: SampleTodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleTodosService]
    }).compile();

    service = module.get<SampleTodosService>(SampleTodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
