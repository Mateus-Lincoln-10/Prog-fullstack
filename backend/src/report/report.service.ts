/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { grpcReportOptions } from './grpc-report.options';
import { Observable, firstValueFrom } from 'rxjs';
import { rmqReportOptions } from './rmq-report.options';

export interface ListReportsResponse {
  reportUrl: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Empty {}

interface ReportGrpcService {
  listReports(empty: Empty): Observable<ListReportsResponse>;
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

  createReport() {
    this.reportRmqClient.emit('report', 'allReports');
    return 'Message Sent successfuly';
  }

  async listReports() {
    return await firstValueFrom(this.reportGrpcService.listReports({}));
  }
}
