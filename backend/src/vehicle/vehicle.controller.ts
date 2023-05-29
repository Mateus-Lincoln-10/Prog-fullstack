import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/createVehicle.dto';
import { VehicleService } from './vehicle.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/login/guards/auth.guard';
import { VehicleDto } from './dto/vehicle.dto';
import { VehicleEntity } from './dto/vehicle.entity';

@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
@ApiTags('Vehicle Controller')
@Controller('/vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: VehicleDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token inválido',
      },
    },
  })
  @ApiBody({ type: CreateVehicleDto })
  @ApiBadRequestResponse({
    description: 'Invalid Data',
    schema: {
      example: {
        statusCode: 400,
        message: 'Invalid Input Data',
        error: 'Bad Request',
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createVehicle(@Body() vehicle: CreateVehicleDto) {
    return this.vehicleService.save(vehicle);
  }

  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token inválido',
      },
    },
  })
  @ApiOkResponse({ type: [VehicleDto] })
  @ApiNoContentResponse({
    schema: {
      example: {
        statusCode: 202,
        message: `Failed to get vehicle list: No vehicle found`,
      },
    },
  })
  @ApiQuery({
    name: 'search',
    type: String,
    description: 'A parameter. Optional',
    required: false,
  })
  @Get()
  async findAllVehicles(@Query('search') search = '') {
    return await this.vehicleService.getVehicleList(search);
  }
}
