import { Customer } from "../customers/customer.entity";
import { Employee } from "../employee/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { SaleProduct } from "./sale-product";

@Entity()
export class Sale {
    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Customer, (customer) => customer.sales)
    @JoinColumn({name: "customer_id"})
    customer: Customer;

    @ManyToOne(() => Employee, (employee) => employee.sales)
    @JoinColumn({name: "employee_id"})
    employee: Employee;

    @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.sale)
    saleProducts: SaleProduct[];

    @Column('decimal', {precision: 10, scale: 2})
    total: number;
}
