import { Test, TestingModule } from '@nestjs/testing';
import { SampleTodosResolver } from './sample-todos.resolver';
import { SampleTodosService } from './sample-todos.service';

describe('SampleTodosResolver', () => {
  let resolver: SampleTodosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleTodosResolver, SampleTodosService]
    }).compile();

    resolver = module.get<SampleTodosResolver>(SampleTodosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
