import { Injectable } from '@nestjs/common';
import { VehicleEntity } from './dto/vehicle.entity';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehicleAssembler {
  toModelDto(vehicle: VehicleEntity) {
    const vehicleDto: VehicleDto = new VehicleDto();
    vehicleDto.vehicleId = vehicle.vehicleId;
    vehicleDto.vehicleBrand = vehicle.vehicleBrand;
    vehicleDto.vehicleColor = vehicle.vehicleColor;
    vehicleDto.vehicleModel = vehicle.vehicleModel;
    vehicleDto.vehiclePlate = vehicle.vehiclePlate;

    return vehicleDto;
  }
}
