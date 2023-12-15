const joi = require('joi');
const id = joi.number().integer().min(1)
const provFirstname = joi.string().min(3).max(100)
const provLastname = joi.string().min(2).max(100)
const provPhone = joi.string().max(15)
const provEmail = joi.string().email()
const companyName = joi.string().min(1).max(100)
const companyAddress = joi.string()
const companyPhone = joi.string().max(12)
const companyEmail = joi.string().email()

const createProviderSchema = joi.object({
    provFirstname: provFirstname.required(),
    provLastname,
    provPhone,
    provEmail,
    companyName: companyName.required(),
    companyAddress,
    companyPhone,
    companyEmail
})

const updateProviderSchema = joi.object({
    provFirstname,
    provLastname,
    provPhone,
    provEmail,
    companyName,
    companyAddress,
    companyPhone,
    companyEmail
})

const getProviderSchema = joi.object({
    id: id.required()
})

module.exports = { createProviderSchema, updateProviderSchema, getProviderSchema };
