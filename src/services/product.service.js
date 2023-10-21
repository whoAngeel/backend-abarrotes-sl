const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { query } = require('express');

class ProductsService {

    constructor() {

    }

    async create(data) {
        const newProduct = await models.Product.create(data, {
            include: ['category', 'provider'],

        })
        return newProduct
    }

    async update(id, changes) {
        // if(!product)
        const product = this.findOne(id)
        const newProd = await product.update(changes)
        return newProd
    }
    async delete(id) {
        const producto = this.findOne(id)
        await producto.destroy();
        return {
            message: "Producto eliminado"
        }
    }
    async findOne(id) {
        const product = await models.Product.findByPk(id, {
            include: ['category', 'provider']
        })
        if (!product) {
            throw boom.notFound("Producto no encontrado")
        }
        return product
    }
    async findBy(data) { // TODO fix name
        const {id, name} = data
        if(id){
            const product = await models.Product.findByPk(id, {
                include: ['category', 'provider']
            })
            return product
        }else if(name){
            const product = await models.Product.findOne({
                where: {
                    name
                },
                include: ['category', 'provider']
            })
            return product
        }else{
            throw boom.notFound("Producto no encontrado")
        }
    }
    async findAll(query) {
        const options = {
            include: ['category', 'provider']
        }
        const { limit, offset } = query
        if (limit && offset) {
            options.limit = limit;
            options.offset = offset
        }
        const products = await models.Product.findAll(options)
        return products
    }
}

module.exports = ProductsService
