import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [ReportModule, VehicleModule, LoginModule],
})
export class AppModule {}
