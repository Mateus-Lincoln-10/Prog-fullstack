import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Post,
  Query,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './dto/vehicle.dto';
@Controller('/vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  async createVehicle(createVehicle: CreateVehicleDto): Promise<VehicleDto> {
    try {
      return await this.vehicleService.createVehicle(createVehicle);
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException();
    }
  }

  @Get()
  async listVehicles(@Query('search') search = ''): Promise<VehicleDto[]> {
    try {
      return await this.vehicleService.listVehicles(search);
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException();
    }
  }
}
