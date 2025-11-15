import { Column, Entity, ManyToOne } from "typeorm";
import { Sale } from "./sale.entity";

@Entity()
export class SaleProduct{
    @Column()
    sale_id: number;
    
    @Column()
    product_id: number;

    @Column()
    quantity: number;

    @Column('decimal', {precision: 10, scale: 2})
    unit_price: number;

    @ManyToOne(() => Sale, (sale) => sale.saleProducts)
    sale: Sale;
}