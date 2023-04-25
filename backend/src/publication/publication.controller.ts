import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/createPublication.dto';
import { PublicationDto } from './dto/publication.dto';

@Controller('rest/publication')
export class PublicationController {

  constructor(private publicationService: PublicationService) { }

  @HttpCode(201)
  @Post('/publication')
  async createPublication(@Body() publication: CreatePublicationDto) {
    return this.publicationService.createPublication(publication);
  }
}
