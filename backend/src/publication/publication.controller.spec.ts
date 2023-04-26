/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { PublicationController } from './publication.controller';

describe('PublicationController', () => {
  let publicationController: PublicationController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    publicationController = moduleRef.get<PublicationController>(
      PublicationController,
    );
  });

  it('should be defined', () => {
    expect(publicationController).toBeDefined();
  });
});
