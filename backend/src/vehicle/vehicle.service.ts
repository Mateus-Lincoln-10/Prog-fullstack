import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleDto } from './dto/vehicle.dto';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcVehicleOptions } from './grpc-vehicle.options';
import { Observable, firstValueFrom } from 'rxjs';

export interface Search {
  search: string;
}

export interface ListVehicleResponse {
  vehicles: VehicleDto[];
}
interface RpcService {
  createVehicle(createVehicle: CreateVehicleDto): Observable<VehicleDto>;
  listVehicles(search: Search): Observable<ListVehicleResponse>;
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

  async listVehicles(search: string) {
    return firstValueFrom(this.rpcService.listVehicles({ search }));
  }
}
