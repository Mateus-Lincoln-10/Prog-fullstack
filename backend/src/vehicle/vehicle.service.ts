import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class VehicleService {
  constructor(private readonly http: HttpService) {}

  async createVehicle(createVehicle: CreateVehicleDto) {
    try {
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
      const response = await firstValueFrom(
        this.http.get('http://localhost:9002/vehicles', {
          params: { search },
        }),
      );
      return response.data;
    } catch (e) {
      Logger.error('Failed to list Vehicles');
      throw new BadGatewayException('Failed to list Vehicles');
    }
  }
}
