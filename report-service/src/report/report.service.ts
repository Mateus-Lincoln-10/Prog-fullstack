import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Report } from './report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface ListReportsResponse {
  reportUrl: string[];
}

interface VehicleService {
  listVehicles(): Observable<any>;
  listAll(): Observable<ListReportsResponse>;
}

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly repo: Repository<Report>,
  ) {}
  private vehicleGrpc: VehicleService;

  @Client()
  private client: ClientGrpc;

  onModuleInit() {
    this.vehicleGrpc = this.client.getService<VehicleService>('VehicleService');
  }

  listAllVehicles() {
    return this.vehicleGrpc.listAll();
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
