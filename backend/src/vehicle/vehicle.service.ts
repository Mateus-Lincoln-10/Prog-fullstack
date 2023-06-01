import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleDto } from './dto/vehicle.dto';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcVehicleOptions } from './grpc-vehicle.options';
import { Observable, firstValueFrom } from 'rxjs';

interface RpcService {
  createVehicle(createVehicle: CreateVehicleDto): Observable<VehicleDto>;
  listVehicles(): Observable<VehicleDto[]>;
}
@Injectable()
export class VehicleService {
  private rpcService: RpcService;

  @Client(grpcVehicleOptions)
  private client: ClientGrpc;

  onModuleInit() {
    this.rpcService = this.client.getService<RpcService>('VehicleService');
  }

  createVehicle(createVehicle: CreateVehicleDto) {
    return firstValueFrom(this.rpcService.createVehicle(createVehicle));
  }

  async listVehicles() {
    return this.rpcService.listVehicles();
  }
}
