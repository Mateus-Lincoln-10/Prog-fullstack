import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationEntity } from './publication.entity';
import { CreatePublicationDto } from './dto/createPublication.dto';

@Injectable()
export class PublicationService extends TypeOrmCrudService<PublicationEntity>{

    constructor(@InjectRepository(PublicationEntity) repo) {
        super(repo);
    }

    createPublication(publication: CreatePublicationDto) {
    
    }

}
