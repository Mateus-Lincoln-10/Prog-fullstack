/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  let vehicleService: VehicleService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    vehicleService = moduleRef.get<VehicleService>(VehicleService);
  });

  it('should be defined', () => {
    expect(vehicleService).toBeDefined();
  });
});
