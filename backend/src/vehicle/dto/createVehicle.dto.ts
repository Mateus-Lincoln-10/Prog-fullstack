import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: `vehicle plate`,
  })
  @IsNotEmpty()
  vehiclePlate: string;

  @ApiProperty({
    description: `vehicle color`,
  })
  @IsHexColor()
  vehicleColor: string;

  @ApiProperty({
    description: `vehicle model`,
  })
  @IsNotEmpty()
  vehicleModel: string;

  @ApiProperty({
    description: `vehicle brand`,
  })
  @IsNotEmpty()
  vehicleBrand: string;
}
