const joi = require('joi');

const id = joi.number().integer().min(1);
const stock = joi.number().integer().min(0);

const updateStockProductSchema = joi.object({
    id: id.required(),
    stock: stock.required()
});

module.exports = {
    updateStockProductSchema
};
