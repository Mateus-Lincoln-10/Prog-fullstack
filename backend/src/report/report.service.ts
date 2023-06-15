import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { grpcReportOptions } from './grpc-report.options';
import { Observable, firstValueFrom } from 'rxjs';
import { rmqReportOptions } from './rmq-report.options';
import { randomUUID } from 'crypto';
import { RedisService } from 'src/redis/redis.service';

interface Report {
  reportId: string;
  reportUrl: string;
  reportCreatedAt: string;
}
export interface ListReportsResponse {
  reports: Report[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Empty {}

interface ReportGrpcService {
  listReports(empty: Empty): Observable<ListReportsResponse>;
}

@Injectable()
export class ReportService {
  constructor(private readonly redis: RedisService) {}
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
    this.reportRmqClient.emit('report', randomUUID());
    await this.redis.removeKey('reports');
    return 'Message Sent successfuly';
  }

  async listReports() {
    const response = await this.redis.getKey('reports');

    if (response) {
      return response;
    }

    const handleReports = await firstValueFrom(
      this.reportGrpcService.listReports({}),
    );

    await this.redis.saveKey('reports', handleReports);
    return handleReports;
  }
}
