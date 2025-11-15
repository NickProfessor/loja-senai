import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { EmployeeModule } from './employee/employee.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // padrão
      username: 'root',
      password: '',
      database: 'curso',
      autoLoadEntities: true,
      synchronize: false,  // importante! false em produção
      logging: true,
    }),
    ProductsModule, CustomersModule, EmployeeModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
