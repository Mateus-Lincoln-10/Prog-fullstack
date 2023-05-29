import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleDto } from './dto/vehicle.dto';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcVehicleOptions } from './grpc-vehicle.options';
import { Observable } from 'rxjs';

interface RpcService {
  createVehicle(createVehicle: CreateVehicleDto): Observable<VehicleDto[]>;
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

  async createVehicle(creteVehicle: CreateVehicleDto) {
    return this.rpcService.createVehicle(creteVehicle);
  }

  async listVehicles() {
    return this.rpcService.listVehicles();
  }
}
