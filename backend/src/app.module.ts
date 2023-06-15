import { RedisModule } from './redis/redis.module';
import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';
import { CacheStore, Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [
    RedisModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'auth',
      password: 'root',
      database: 'auth',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      logging: ['error'],
      extra: {
        connectionLimit: 5,
      },
      synchronize: true,
    }),
    ReportModule,
    VehicleModule,
    LoginModule,
  ],
})
export class AppModule {}
