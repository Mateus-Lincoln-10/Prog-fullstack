import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 300,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'auth',
      password: 'root',
      database: 'auth',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      synchronize: true,
    }),
    ReportModule,
    VehicleModule,
    LoginModule,
  ],
})
export class AppModule {}
