import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationEntity } from './publication.entity';
import { CreatePublicationDto } from './dto/createPublication.dto';
import { Like, Repository } from 'typeorm';
import { VehicleService } from 'src/vehicle/vehicle.service';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(PublicationEntity)
    private readonly publicationRepository: Repository<PublicationEntity>,
    private readonly vehicleService: VehicleService,
  ) {}

  async createPublication(publication: CreatePublicationDto) {
    const publicationEntity: PublicationEntity = new PublicationEntity();

    publicationEntity.vehicleId = await this.vehicleService.save(
      publication.vehicle,
    );

    publicationEntity.publicationTitle = publication.publicationTitle;

    publicationEntity.publicationDescription =
      publication.publicationDescription;

    return await this.publicationRepository.save(publicationEntity);
  }

  async getPublicationList(search: string): Promise<PublicationEntity[]> {
    const publications = await this.publicationRepository.find({
      where: {
        publicationTitle: Like(`%${search}%`),
      },
    });

    return publications;
  }
}
