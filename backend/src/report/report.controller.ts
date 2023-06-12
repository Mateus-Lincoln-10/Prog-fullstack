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
import { AuthGuard } from 'src/login/guards/auth.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@ApiTags('Report Controller')
@Controller('/report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @ApiCreatedResponse({
    description: 'The report request has been successfully sent.',
  })
  @UseGuards(ThrottlerGuard)
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
