import { Test, TestingModule } from '@nestjs/testing';
import { JfyApiService } from './jfy-api.service';

describe('JfyApiService', () => {
  let service: JfyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JfyApiService],
    }).compile();

    service = module.get<JfyApiService>(JfyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
