import { IsNotEmpty } from "class-validator";

export class PublicationDto {
    @IsNotEmpty()
    publicationId: string;

    @IsNotEmpty()
    publicationTitle: string;

    @IsNotEmpty()
    publicationDescription: string;
}