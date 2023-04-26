import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/createPublication.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/login/guards/auth.guard';

@ApiTags('Publication Controller')
@UseGuards(AuthGuard)
@Controller()
export class PublicationController {
  constructor(private publicationService: PublicationService) {}

  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @Post('/publication')
  async createPublication(@Body() publication: CreatePublicationDto) {
    return this.publicationService.createPublication(publication);
  }

  @HttpCode(200)
  @ApiOkResponse({ description: 'Publications retrieved successfully' })
  @Get('/publication')
  async getPublicationList(@Query('search') search: string) {
    return this.publicationService.getPublicationList(search);
  }
}
