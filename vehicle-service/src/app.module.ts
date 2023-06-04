import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    VehicleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'vehicle',
      password: 'root',
      database: 'vehicle',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      synchronize: true,
      logging: ['error'],
      extra: {
        connectionLimit: 5,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
