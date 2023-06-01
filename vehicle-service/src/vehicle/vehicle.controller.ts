import { Controller, Get, Query } from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './dto/vehicle.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';
import {
  ListVehicleResponse,
  Search,
} from './interfaces/vehicles-proto.interface';
@Controller()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @GrpcMethod('VehicleService', 'createVehicle')
  createVehicle(createVehicle: CreateVehicleDto): Observable<VehicleDto> {
    return from(this.vehicleService.createVehicle(createVehicle));
  }

  @GrpcMethod('VehicleService', 'listVehicles')
  listVehicles({ search }: Search): Observable<ListVehicleResponse> {
    return from(this.vehicleService.listVehicles(search));
  }
}
