import { Sale } from "../sales/sale.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @OneToMany(() => Sale, (sale) => sale.customer)
    sales: Sale[];
}
