import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Report } from './report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { join } from 'path';
import { VehicleDto } from './vehicle.dto';

export interface ListReportsResponse {
  reportUrl: string[];
}

export interface Search {
  search: string;
}

export interface ListVehicleResponse {
  vehicles: VehicleDto[];
}

interface VehicleService {
  listVehicles(search: Search): Observable<ListVehicleResponse>;
}

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly repo: Repository<Report>,
  ) {}
  private vehicleGrpc: VehicleService;

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'vehicle',
      protoPath: join(__dirname, './vehicle.proto'),
    },
  })
  private client: ClientGrpc;

  onModuleInit() {
    this.vehicleGrpc = this.client.getService<VehicleService>('VehicleService');
  }

  listAllVehicles() {
    return this.vehicleGrpc.listVehicles({ search: '' });
  }

  async listReports() {
    const reports = await this.repo.find();
    const reportsResponse: ListReportsResponse = {
      reportUrl: reports.map((e) => e.reportUrl),
    };
    return reportsResponse;
  }

  async generateReports() {
    console.log(`chegou`);
  }
}
