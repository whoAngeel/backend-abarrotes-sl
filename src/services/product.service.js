const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

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
    async findOne(id) {
        const rta = await sequelize.query
    }
    findAll() {

    }
}

module.exports = ProductsService
