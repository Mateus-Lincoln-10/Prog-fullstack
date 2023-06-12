import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Report } from '../models/report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadHandlerService } from './uploadReport.service';
import { PdfConverterService } from './pdfConverter.service';
import { ReportTemplate } from '../models/report.template';
import { randomUUID } from 'crypto';
import { ReportNotificationGateway } from './report-notification.gateway';
import { HttpService } from '@nestjs/axios';
import { VehicleDto } from '../models/vehicle.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly repo: Repository<Report>,
    private readonly uploadService: UploadHandlerService,
    private readonly pdfService: PdfConverterService,
    private readonly notificationService: ReportNotificationGateway,
    private readonly http: HttpService,
  ) {}

  async listAllVehicles(): Promise<AxiosResponse<VehicleDto[]>> {
    const search = '';
    return firstValueFrom(
      this.http.get('http://localhost:9002/vehicles', {
        params: { search },
      }),
    );
  }

  async listReports() {
    const reports = await this.repo.find();
    return { reports };
  }

  async saveReport(reportUrl: string) {
    const report = new Report();
    report.reportUrl = reportUrl;

    await this.repo.save(report);
    console.log(report);
  }

  async generateReports() {
    const report = new ReportTemplate();
    const vehicleresponse = await this.listAllVehicles();
    const data = report.getHTML(vehicleresponse.data);
    const pdf = await this.pdfService.convertToPdf(data);
    const filename = randomUUID();
    const reportUrl = await this.uploadService.uploadPdf(pdf, filename);
    await this.saveReport(reportUrl);
  }
}
