import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      synchronize: true,
    }),
    ReportModule,
    VehicleModule,
    LoginModule,
  ],
})
export class AppModule {}
