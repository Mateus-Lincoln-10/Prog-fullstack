import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    // CacheModule.registerAsync<RedisClientOptions>({
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => {
    //     const store = await redisStore({
    //       socket: {
    //         host: config.get('REDIS_HOST'),
    //         port: +config.get('REDIS_PORT'),
    //       },
    //     });
    //     return {
    //       store: store as unknown as CacheStore,
    //       ttl: 60,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
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
