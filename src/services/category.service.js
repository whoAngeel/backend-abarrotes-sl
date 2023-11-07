const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const { models } = require('../libs/sequelize');

class CategoriesService {
    constructor() {

    }

    async create(data) {
        const newCat = await models.Category.create(data)
        return newCat
    }

    async findAll(query) {
        const options = {

        }
        const { limit, offset } = query
        if (limit && offset) {
            options.limit = limit;
            options.offset = offset
        }
        const categories = await models.Category.findAll(options)
        const totalCategories = await models.Category.count()
        return {
            categories,
            totalCategories
        };
    }

    async findOne(id) {
        const category = await models.Category.findByPk(id)
        if (!category) throw boom.notFound("Categoria no encontrada")
        return category
    }

    async update(id, changes) {
        const category = this.findOne(id)
        const newCat = (await category).update(changes)
        return {
            message: "Categoria actualizada",
            id: newCat.id,
        }
    }

    async delete(id) {
        const category = this.findOne(id);
        (await category).destroy();

        return {
            message: "Categoria eliminada"
        }
    }
}


module.exports = CategoriesService
