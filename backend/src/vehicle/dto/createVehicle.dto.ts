import { IsHexColor, IsNotEmpty } from "class-validator";

export class CreateVehicleDto {
    @IsNotEmpty()
    vehiclePlate: string;

    @IsHexColor()
    vehicleColor: string;

    @IsNotEmpty()
    vehicleModel: string;

    @IsNotEmpty()
    vehicleBrand: string;
}