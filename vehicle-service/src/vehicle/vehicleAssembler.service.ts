import { Injectable } from '@nestjs/common';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehicleAssembler {
  toModelDto(vehicle: VehicleEntity): VehicleDto {
    const vehicleDto: VehicleDto = {
      vehicleId: vehicle.vehicleId,
      vehiclePlate: vehicle.vehiclePlate,
      vehicleColor: vehicle.vehicleColor,
      vehicleModel: vehicle.vehicleModel,
      vehicleBrand: vehicle.vehicleBrand,
      vehicleYear: vehicle.vehicleYear,
    };

    return vehicleDto;
  }
}
