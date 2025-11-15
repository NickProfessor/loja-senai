import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpsertEmployeeDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    salary: number;
}