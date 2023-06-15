import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { HttpModule } from '@nestjs/axios';
import { RedisModule } from 'src/redis/redis.module';
@Module({
  imports: [HttpModule, RedisModule],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
