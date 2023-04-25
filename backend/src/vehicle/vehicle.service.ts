import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from './vehicle.entity';

@Injectable()
export class VehicleService extends TypeOrmCrudService<VehicleEntity>{

    constructor(@InjectRepository(VehicleEntity) repo) {
        super(repo);
    }

}
