import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: `vehicle plate`,
    example: 'GTR-1440',
  })
  @IsNotEmpty()
  vehiclePlate: string;

  @ApiProperty({
    description: `vehicle color`,
    example: '#fff',
  })
  @IsHexColor()
  vehicleColor: string;

  @ApiProperty({
    description: `vehicle model name`,
    example: 'Sentra',
  })
  @IsNotEmpty()
  vehicleModel: string;

  @ApiProperty({
    description: `vehicle brand`,
    example: 'Nissan',
  })
  @IsNotEmpty()
  vehicleBrand: string;

  @ApiProperty({
    description: 'Vehicle fabrication year',
    example: '2009',
  })
  @IsNotEmpty()
  vehicleYear: string;
}
