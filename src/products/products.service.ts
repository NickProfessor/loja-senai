import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertProductDTO } from './dto/upsert-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    private products: Array<any>;
    
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>
    ) {
    }

    async findAll() {
        return  await this.productsRepository.find();
    }

    async findOne(id: number) {
        const product = await this.productsRepository.findOneBy({id});
        if (!product) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return product;
    }


    async create(product: UpsertProductDTO) {
        const newProduct = await this.productsRepository.create(product);        
        await this.productsRepository.save(newProduct);
        
        return {
            "message": "Produto Criado!"
        };
    }

    async update(id: number, body: UpsertProductDTO) {
       const product = await this.productsRepository.update(id, body);
        if (!product) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return {
            "message": "Produto Atualizado!"
        };
    }

    async delete(id: number) {
        const product = await this.productsRepository.delete(id);
        if (!product) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return {
            "message": "Produto removido!"
        }
    }
}