import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from './entities/vehicle.entity';
import { ILike, Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleAssembler } from './vehicleAssembler.service';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repo: Repository<VehicleEntity>,
    private readonly assembler: VehicleAssembler,
  ) {}

  async createVehicle(vehicle: CreateVehicleDto): Promise<VehicleDto> {
    const vehicleEntity: VehicleEntity = new VehicleEntity();
    vehicleEntity.vehicleBrand = vehicle.vehicleBrand;
    vehicleEntity.vehicleColor = vehicle.vehicleColor;
    vehicleEntity.vehicleModel = vehicle.vehicleModel;
    vehicleEntity.vehiclePlate = vehicle.vehiclePlate;
    vehicleEntity.vehicleYear = vehicle.vehicleYear;

    const newVehicle = await this.repo.save(vehicleEntity);
    return this.assembler.toModelDto(newVehicle);
  }

  async getVehicleList(search: string): Promise<VehicleDto[]> {
    try {
      const vehicles = await this.repo.find({
        where: {
          vehicleModel: ILike(`%${search}%`),
        },
      });
      if (vehicles.length === 0) {
        throw new HttpException('No vehicle found', HttpStatus.NO_CONTENT);
      }
      return vehicles.map((e) => this.assembler.toModelDto(e));
    } catch (error) {
      Logger.error(error);
      Logger.error(`Failed to get vehicle list: ${error.message}`);
      throw error;
    }
  }
}
