import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpsertProductDTO } from './dto/upsert-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get('/')
    findAll() {
        return this.productsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') productID: number) {
        return this.productsService.findOne(productID);
    }



    @Post('/')
    create(@Body() productBody: UpsertProductDTO) {
        return this.productsService.create(productBody);
    }

    // localhost:3000/products/2
    // path param
    @Put(':id')
    update(@Param('id') productID: number, @Body() updateBody: UpsertProductDTO) {
        return this.productsService.update(productID, updateBody);
    }

    @Delete(':id')
    delete(@Param('id') productID: number) {
        return this.productsService.delete(productID);
    }
}