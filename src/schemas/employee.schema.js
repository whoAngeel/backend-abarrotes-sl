const joi = require('joi');

const id = joi.number().integer().min(1)
const rfc = joi.string().min(13).max(13)
const curp = joi.string().min(18).max(18)
const fullname = joi.string().min(3).max(255)
const phone = joi.string()
const email = joi.string().email()
const salary = joi.number()
const userId = joi.number().integer().min(1)

const createEmployeeSchema = joi.object({
    rfc,
    curp: curp.required(),
    fullname: fullname.required(),
    phone,
    email: email.required(),
    salary,
    userId: userId.required()
})

const updateEmployeeSchema = joi.object({
    rfc,
    curp,
    fullname,
    phone,
    email,
    salary,
    userId
})

const getEmployeeSchema = joi.object({
    id: id.required()
})

module.exports = {
    createEmployeeSchema,
    updateEmployeeSchema,
    getEmployeeSchema
}
