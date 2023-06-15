import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Module } from '@nestjs/common';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
