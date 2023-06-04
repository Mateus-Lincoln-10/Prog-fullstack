import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { AuthGuard } from 'src/login/guards/auth.guard';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@ApiTags('Report Controller')
@UseInterceptors(CacheInterceptor)
@Controller('/report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @ApiCreatedResponse({
    description: 'The report request has been successfully sent.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createReports() {
    return { message: this.reportService.createReport() };
  }

  @Get()
  async listReports() {
    return await this.reportService.listReports();
  }
}
