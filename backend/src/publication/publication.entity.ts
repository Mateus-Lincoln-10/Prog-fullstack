import { VehicleEntity } from 'src/vehicle/vehicle.entity';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToOne, CreateDateColumn } from 'typeorm';

@Entity('publication')
export class PublicationEntity {
    @PrimaryGeneratedColumn(`uuid`) 
    publicationId:string;

    @Column({name: 'publication_title'})
    publicationTitle: string;

    @Column({name: 'publication_description'})
    publicationDescription: string;

    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    createdAt: string;

    @OneToOne(() => VehicleEntity)
    @JoinColumn()
    vehicleId: VehicleEntity;
}
