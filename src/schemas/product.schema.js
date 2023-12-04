const joi = require('joi');

const id = joi.number().integer().min(1);
const name = joi.string().min(3).max(100);
const purchasePrice = joi.number().min(0);
const salePrice = joi.number().min(0);
const description = joi.string().max(255);
const barCode = joi.string().max(50);
const imgUrl = joi.string().uri();
const stock = joi.number().integer().min(0);
const brand = joi.string().max(50);
const measureUnit = joi.string();
const providerId = joi.number().integer().min(1);
const categoryId = joi.number().integer().min(1);
const createdAt = joi.string().isoDate();

const limit = joi.number().integer();
const offset = joi.number().integer();


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
    providerId: providerId.required(),
    categoryId: categoryId.required(),
});

const updateProductSchema = joi.object({
    name,
    purchasePrice,
    salePrice,
    description,
    barCode,
    imgUrl,
    stock,
    brand,
    providerId,
    categoryId,
});

const searchByIdSchema = joi.object({
    id: id.required()
});

const searchByNameSchema = joi.object({
    name: joi.string().required()
});

const searchByBarCode = joi.object({
    barCode: barCode.required()
});

const getProductSchema = joi.alternatives().try(searchByIdSchema, searchByNameSchema, searchByBarCode);

const getProdSchema = joi.object({
    id: id.required()
})
const queryProductSchema = joi.object({
    offset,
    limit,
});

module.exports = {
    getProdSchema,
    createProductSchema,
    updateProductSchema,
    getProductSchema,
    queryProductSchema,
};
