import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertSaleDto } from './dto/upsert-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>
  ){}
  create(createSaleDto: UpsertSaleDto) {
    const sale = this.salesRepository.create(createSaleDto);
    this.salesRepository.save(sale);
    return { message: 'Sale criado com sucesso' };
  }

  // findAll() {
  //   const sale = this.salesRepository.find();
  //   if(!sale){
  //      throw new NotFoundException('Nenhuma venda encontrada');
  //   }
  //   return sale;
  // }

  // findOne(id: number) {
  //   const sale = this.salesRepository.findOneBy({id});
  //   if(!sale){
  //     throw new NotFoundException(`Venda com ID ${id} não encontrada`);
  //  }
  //   return sale;
  // }

  // update(id: number, updateSaleDto: UpsertSaleDto) {
  //   const sale = this.salesRepository.update(id, updateSaleDto);
  //   if(!sale){
  //     throw new NotFoundException(`Venda com ID ${id} não encontrada`);
  //  }
  //   return { message: 'Sale atualizado com sucesso' };
  // }

  // remove(id: number) {
  //   const sale = this.salesRepository.delete(id);
  //   if(!sale){
  //     throw new NotFoundException(`Venda com ID ${id} não encontrada`);
  //  }
  //   return `Venda com ID ${id} removida com sucesso`;
  // }
}
