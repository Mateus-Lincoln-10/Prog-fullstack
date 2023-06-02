import { Controller } from '@nestjs/common';
import { ReportService } from './report.service';
import {
  Ctx,
  GrpcMethod,
  MessagePattern,
  RmqContext,
} from '@nestjs/microservices';
import { from } from 'rxjs';

@Controller()
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @GrpcMethod('ReportService', 'listReports')
  listReports() {
    return from(this.reportService.listReports());
  }

  @MessagePattern('report')
  async createReport(@Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    await this.reportService.generateReports();
    channel.ack(originalMsg);
  }
}