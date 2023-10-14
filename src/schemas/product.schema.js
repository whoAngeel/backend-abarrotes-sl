const joi = require('joi');

// const id = joi.string().uuid()
// const name = joi.string().alphanum().min(3).max(255)
// const sale_price = joi.number().min(0).precision(2)
// const purchase_price = joi.number().min(0).precision(2)


const id = joi.number().integer().min(1)
const name = joi.string().min(3).max(100)
const purchasePrice = joi.number().min(0)
const salePrice = joi.number().min(0)
const description = joi.string().max(255)
const barCode = joi.string().max(50)
const imgUrl = joi.string().uri()
const stock = joi.number().integer().min(0)
const brand = joi.string().max(50)
const measureUnit = joi.string()
const idProvider = joi.number().integer().min(1)
const idCategory = joi.number().integer().min(1)
const createdAt = joi.string().isoDate()

const createProductSchema = joi.object({
    name: name.required(),
    purchasePrice: purchasePrice.required(),
    salePrice: salePrice.required(),
    description,
    barCode,
    imgUrl,
    stock: stock.required(),
    brand,
    measureUnit,
    idProvider: idProvider.required(),
    idCategory: idCategory.required(),
})

const updateProductSchema = joi.object({
    name,
    purchasePrice,
    salePrice,
    description,
    barCode,
    imgUrl,
    stock,
    brand,
    measureUnit,
    idProvider,
    idCategory,
})

const getProductSchema = joi.object({
    id: id.required()
})


module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
}
