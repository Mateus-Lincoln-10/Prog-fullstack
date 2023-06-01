import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('vehicle')
export class VehicleEntity {
  @PrimaryGeneratedColumn(`uuid`)
  vehicleId: string;

  @Column({ name: 'vehicle_plate' })
  vehiclePlate: string;

  @Column({ name: 'vehicle_color' })
  vehicleColor: string;

  @Column({ name: 'vehicle_model' })
  vehicleModel: string;

  @Column({ name: 'vehicle_brand' })
  vehicleBrand: string;

  @CreateDateColumn({ name: 'vehicle_created_at', type: 'timestamp' })
  vehicleCreatedAt: string;

  @Column({ name: 'vehicle_year' })
  vehicleYear: string;
}
