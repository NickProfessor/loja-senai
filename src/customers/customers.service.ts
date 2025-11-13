import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpsertCustomerDTO } from './dto/upsert-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
          @InjectRepository(Customer)
          private customersRepository: Repository<Customer>
      ) {
      }
  async create(body: UpsertCustomerDTO) {
    const customer = await this.customersRepository.create(body);        
        await this.customersRepository.save(customer);
        
        return {
            "message": "Customer Criado!"
        };
    }

  async findAll() {
     return  await this.customersRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customersRepository.findOneBy({id});
            if (!customer) {
                throw new NotFoundException(`Customer com ID ${id} não encontrado`);
            }
            return customer;
          }

  async update(id: number, body: UpsertCustomerDTO) {
         const customer = await this.customersRepository.update(id, body);
          if (!customer) {
              throw new NotFoundException(`Customer com ID ${id} não encontrado`);
          }
          return {
              "message": "Customer Atualizado!"
          };
      }

  async delete(id: number) {
        const customer = await this.customersRepository.delete(id);
        if (!customer) {
            throw new NotFoundException(`Customer com ID ${id} não encontrado`);
        }
        return {
            "message": "Customer removido!"
        }
    }
}
