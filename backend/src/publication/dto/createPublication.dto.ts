import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateVehicleDto } from 'src/vehicle/dto/createVehicle.dto';
export class CreatePublicationDto {
  @ApiProperty({
    description: 'publication title',
  })
  @IsNotEmpty()
  publicationTitle: string;

  @ApiProperty({
    description: `publication description`,
  })
  @IsNotEmpty()
  publicationDescription: string;

  @ApiProperty({ type: () => CreateVehicleDto })
  @IsNotEmpty()
  vehicle: CreateVehicleDto;
}
