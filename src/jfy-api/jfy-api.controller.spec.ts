import { Test, TestingModule } from '@nestjs/testing';
import { JfyApiController } from './jfy-api.controller';

describe('JfyApiController', () => {
  let controller: JfyApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JfyApiController],
    }).compile();

    controller = module.get<JfyApiController>(JfyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
