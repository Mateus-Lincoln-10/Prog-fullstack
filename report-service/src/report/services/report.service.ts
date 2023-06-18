import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Report } from '../models/report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadHandlerService } from './uploadReport.service';
import { PdfConverterService } from './pdfConverter.service';
import { ReportTemplate } from '../models/report.template';
import { randomUUID } from 'crypto';
import { HttpService } from '@nestjs/axios';
import { VehicleDto } from '../models/vehicle.dto';
import https from 'https';
import { AxiosResponse } from 'axios';
import { ReportGateway } from '../events/report.gateway';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly repo: Repository<Report>,
    private readonly uploadService: UploadHandlerService,
    private readonly pdfService: PdfConverterService,
    private readonly notificationService: ReportGateway,
    private readonly http: HttpService,
  ) {}

  async listAllVehicles(): Promise<AxiosResponse<VehicleDto[]>> {
    const search = '';
    return firstValueFrom(
      this.http.get('https://localhost:9002/vehicles', {
        params: { search },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
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
  }

  async generateReports() {
    const report = new ReportTemplate();
    const vehicleresponse = await this.listAllVehicles();
    const data = report.getHTML(vehicleresponse.data);
    const pdf = await this.pdfService.convertToPdf(data);
    const filename = randomUUID();
    const reportUrl = await this.uploadService.uploadPdf(pdf, filename);
    await this.saveReport(reportUrl);
    this.notificationService.sendNotification();
  }
}
