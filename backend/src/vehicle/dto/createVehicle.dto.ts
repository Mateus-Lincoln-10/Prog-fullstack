import { ApiProperty } from '@nestjs/swagger';
import { Escape } from 'class-sanitizer';
import { IsHexColor, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: `vehicle plate`,
    example: 'GTR-1440',
  })
  @Escape()
  @IsNotEmpty()
  vehiclePlate: string;

  @ApiProperty({
    description: `vehicle color`,
    example: '#fff',
  })
  @Escape()
  @IsHexColor()
  vehicleColor: string;

  @ApiProperty({
    description: `vehicle model name`,
    example: 'Sentra',
  })
  @Escape()
  @IsNotEmpty()
  vehicleModel: string;

  @ApiProperty({
    description: `vehicle brand`,
    example: 'Nissan',
  })
  @Escape()
  @IsNotEmpty()
  vehicleBrand: string;

  @ApiProperty({
    description: 'Vehicle fabrication year',
    example: '2009',
  })
  @Escape()
  @IsNotEmpty()
  vehicleYear: string;
}
