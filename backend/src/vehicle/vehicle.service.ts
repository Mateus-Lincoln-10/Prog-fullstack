import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class VehicleService {
  constructor(
    private readonly http: HttpService,
    private readonly redis: RedisService,
  ) {}

  async createVehicle(createVehicle: CreateVehicleDto) {
    try {
      await this.redis.removeKey('vehicles');
      return firstValueFrom(
        this.http.post('http://localhost:9002/vehicles', createVehicle),
      );
    } catch (e) {
      Logger.error('Failed to create vehicle');
      throw new BadRequestException('Failed to create vehicle');
    }
  }

  async listVehicles(search: string) {
    try {
      const cache = await this.redis.getKey('vehicles');

      if (cache) {
        return cache;
      }

      const response = await firstValueFrom(
        this.http.get('http://localhost:9002/vehicles', {
          params: { search },
        }),
      );

      await this.redis.saveKey('vehicles', response.data);
      return response.data;
    } catch (e) {
      Logger.error('Failed to list Vehicles');
      throw new BadGatewayException('Failed to list Vehicles');
    }
  }
}
