import { EventsModule } from './report/events/events.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EventsModule,
    ConfigModule.forRoot({ isGlobal: true }),
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
    ReportModule,
  ],
})
export class AppModule {}
