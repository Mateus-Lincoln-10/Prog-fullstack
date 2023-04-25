import { IsNotEmpty } from "class-validator";
import { VehicleDto } from "src/vehicle/dto/vehicle.dto";

export class CreatePublicationDto {
    @IsNotEmpty()
    publicationTitle: string;

    @IsNotEmpty()
    publicationDescription: string;

    @IsNotEmpty()
    vehicle: VehicleDto
}