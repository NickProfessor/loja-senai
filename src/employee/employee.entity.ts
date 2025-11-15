import { Sale } from "../sales/sale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column('decimal', {precision: 10, scale: 2})
    salary: number; 

    @OneToMany(() => Sale, (sale) => sale.employee)
    sales: Sale[];
}
