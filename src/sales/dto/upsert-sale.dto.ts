import { IsNotEmpty, IsNumber } from "class-validator";

export class UpsertSaleDto {
    @IsNumber()
    @IsNotEmpty()
    employee_id: number;

    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    total: number;
}
