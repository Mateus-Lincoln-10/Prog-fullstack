import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationController } from './publication.controller';
import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationEntity]), VehicleModule],
  providers: [PublicationService],
  controllers: [PublicationController],
})
export class PublicationModule {}
