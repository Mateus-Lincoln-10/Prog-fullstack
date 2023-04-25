import { IsHexColor, IsNotEmpty } from "class-validator";

export class VehicleDto {
    @IsNotEmpty()
    vehicleId: string;

    @IsNotEmpty()
    vehiclePlate: string;

    @IsHexColor()
    vehicleColor: string;

    @IsNotEmpty()
    vehicleModel: string;

    @IsNotEmpty()
    vehicleBrand: string;
}