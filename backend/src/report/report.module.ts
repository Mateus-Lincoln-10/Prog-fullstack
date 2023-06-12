import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
