import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './services/report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './models/report.entity';
import { PdfConverterService } from './services/pdfConverter.service';
import { UploadHandlerService } from './services/uploadReport.service';
import { ReportNotificationGateway } from './services/report-notification.gateway';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Report]), HttpModule],
  controllers: [ReportController],
  providers: [
    ReportService,
    PdfConverterService,
    UploadHandlerService,
    ReportNotificationGateway,
  ],
})
export class ReportModule {}
