const joi = require('joi');

const employeeId = joi.number().integer()
const id = joi.number().integer()
const saleId = joi.number().integer()
const amount = joi.number().integer()
const productId = joi.number().integer()

const getSaleSchema = joi.object({
    id: id.required()
})

const createSaleSchema = joi.object({
    employeeId: employeeId.required()
})

const addItemSchema = joi.object({
    saleId: saleId.required(),
    productId: productId.required(),
    amount: amount.required()
})

module.exports = {
    getSaleSchema, createSaleSchema, addItemSchema
}
