import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty({ description: 'Vehicle Id', example: 1 })
  vehicleId: string;

  @ApiProperty({ description: 'Vehicle Plate', example: 'GTR-1440' })
  vehiclePlate: string;

  @ApiProperty({ description: 'Vehicle color Hex', example: '#fff' })
  vehicleColor: string;

  @ApiProperty({ description: 'Vehicle model name', example: 'Sentra' })
  vehicleModel: string;

  @ApiProperty({ description: 'Vehicle brand name', example: 'Nissan' })
  vehicleBrand: string;

  @ApiProperty({ description: 'Vehicle fabrication year', example: '2009' })
  vehicleYear: string;
}
