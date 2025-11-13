import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpsertCustomerDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    age: number;
}