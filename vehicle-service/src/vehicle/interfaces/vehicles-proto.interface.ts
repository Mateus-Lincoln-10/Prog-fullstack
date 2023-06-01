import { VehicleDto } from '../dto/vehicle.dto';

export interface Search {
  search: string;
}

export interface ListVehicleResponse {
  vehicles: VehicleDto[];
}
