const joi = require('joi');

const name = joi.string().min(3).max(100)
const description = joi.string().max(255)
const id = joi.number().integer().min(1)

const createCategorySchema = joi.object({
    name: name.required(),
    description,
})

const updateCategorySchema = joi.object({
    name,
    description,
})

const getCategorySchema = joi.object({
    id: id.required()
})

module.exports = {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema
}
