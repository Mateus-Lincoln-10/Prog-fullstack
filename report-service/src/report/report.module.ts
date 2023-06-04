import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './services/report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './models/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
