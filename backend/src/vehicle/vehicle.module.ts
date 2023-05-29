import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { VehicleAssembler } from './vehicleAssembler.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [],
  providers: [VehicleService, VehicleAssembler],
  controllers: [VehicleController],
})
export class VehicleModule {}
