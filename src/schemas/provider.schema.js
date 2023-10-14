const joi = require('joi');
const id = joi.number().integer().min(1)
const name = joi.string().min(3).max(100)
const phone = joi.string().max(15)
const email = joi.string().email()

const createProviderSchema = joi.object({
    name: name.required(),
    phone,
    email
})

const updateProviderSchema = joi.object({
    name,
    phone,
    email
})

const getProviderSchema = joi.object({
    id: id.required()
})

module.exports = { createProviderSchema, updateProviderSchema, getProviderSchema };
