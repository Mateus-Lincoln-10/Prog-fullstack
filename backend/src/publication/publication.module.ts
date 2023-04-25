import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationController } from './publication.controller';
import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationEntity])],
  providers: [PublicationService],
  controllers: [PublicationController]
})
export class PublicationModule { }
