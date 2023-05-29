/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { grpcReportOptions } from './grpc-report.options';
import { Observable } from 'rxjs';
import { rmqReportOptions } from './rmq-report.options';

interface ReportGrpcService {
  listReports(): Observable<any>;
}

@Injectable()
export class ReportService {
  private reportGrpcService: ReportGrpcService;
  @Client(grpcReportOptions)
  private reportGrpcClient: ClientGrpc;

  @Client(rmqReportOptions)
  private reportRmqClient: ClientProxy;

  onModuleInit() {
    this.reportGrpcService =
      this.reportGrpcClient.getService<ReportGrpcService>('ReportService');
  }

  async createReport() {
    this.reportRmqClient.emit('report', 'allReports');
  }

  async listReports() {
    return this.reportGrpcService.listReports();
  }
}
