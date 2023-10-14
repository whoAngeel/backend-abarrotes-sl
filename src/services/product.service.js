const boom = require('@hapi/boom');

class ProductsService {

    constructor() {

    }

    create() {

    }
    update(id, data) {
        // if(!product)
    }
    delete(id) {

    }
    findOne(id) {
        const product = database.find(id)
        if (!product) {
            throw boom.notFound("Producto no encontrado")
        }
    }
    findAll() {

    }
}

module.exports = ProductsService
