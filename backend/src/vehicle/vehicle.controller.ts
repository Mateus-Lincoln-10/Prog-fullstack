import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { VehicleService } from './vehicle.service';
import { VehicleEntity } from './vehicle.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:VehicleEntity},
    params:{
    }
})
@Controller('rest/vehicle')
export class VehicleController {

  constructor(private service: VehicleService) { }

}
