import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './services/report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './models/report.entity';
import { PdfConverterService } from './services/pdfConverter.service';
import { UploadHandlerService } from './services/uploadReport.service';
import { HttpModule } from '@nestjs/axios';
import { EventsModule } from './events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([Report]), HttpModule, EventsModule],
  controllers: [ReportController],
  providers: [ReportService, PdfConverterService, UploadHandlerService],
})
export class ReportModule {}
