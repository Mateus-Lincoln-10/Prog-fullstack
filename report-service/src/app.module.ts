import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    ReportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'report',
      password: 'root',
      database: 'report',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      synchronize: true,
      logging: ['error'],
      extra: {
        connectionLimit: 5,
      },
    }),
  ],
})
export class AppModule {}
