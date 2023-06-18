import { Module } from '@nestjs/common';
import { ReportGateway } from './report.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ReportGateway],
  exports: [ReportGateway],
})
export class EventsModule {}
