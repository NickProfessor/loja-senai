import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { CustomersModule } from 'src/customers/customers.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { Customer } from 'src/customers/customer.entity';
import { Employee } from 'src/employee/employee.entity';

@Module({
  imports: [Customer, Employee],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
