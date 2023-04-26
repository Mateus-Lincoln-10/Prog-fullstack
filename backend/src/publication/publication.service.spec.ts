/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { PublicationService } from './publication.service';

describe('PublicationService', () => {
  let publicationService: PublicationService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    publicationService = moduleRef.get<PublicationService>(PublicationService);
  });

  it('should be defined', () => {
    expect(publicationService).toBeDefined();
  });
});
