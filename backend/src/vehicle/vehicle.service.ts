import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from './vehicle.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/createVehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repo: Repository<VehicleEntity>,
  ) {}

  async save(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
    let vehicleEntity: VehicleEntity = new VehicleEntity();
    vehicleEntity.vehicleBrand = vehicle.vehicleBrand;
    vehicleEntity.vehicleColor = vehicle.vehicleColor;
    vehicleEntity.vehicleModel = vehicle.vehicleModel;
    vehicleEntity.vehiclePlate = vehicle.vehiclePlate;

    return await this.repo.save(vehicleEntity);
  }
}
