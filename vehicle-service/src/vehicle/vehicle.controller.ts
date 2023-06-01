import { Controller, Get, Query } from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './dto/vehicle.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';

@Controller()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @GrpcMethod('VehicleService', 'createVehicle')
  createVehicle(createVehicle: CreateVehicleDto): Observable<VehicleDto> {
    return from(this.vehicleService.createVehicle(createVehicle));
  }

  @Get()
  async findAllVehicles(@Query('search') search = '') {
    return await this.vehicleService.getVehicleList(search);
  }
}
