import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { UpsertCustomerDTO } from './dto/upsert-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() upsertCustomerDTO:UpsertCustomerDTO) {
    return this.customersService.create(upsertCustomerDTO);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() upsertCustomerDTO: UpsertCustomerDTO) {
    return this.customersService.update(+id, upsertCustomerDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.delete(+id);
  }
}
