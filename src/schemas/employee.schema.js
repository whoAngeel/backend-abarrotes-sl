const joi = require('joi');

const validRoles = ["admin", "employee", "dev"];

const id = joi.number().integer().min(1)
const rfc = joi.string().min(13).max(13)
const curp = joi.string().min(18).max(18)
const fullname = joi.string().min(3).max(255)
const phone = joi.string()
const email = joi.string().email()
const salary = joi.number()
const userId = joi.number().integer().min(1)
const username = joi.string().alphanum().min(3).max(100)
const password = joi.string().min(3).max(12)
const role = joi.string().min(3).max(12).valid(...validRoles)

const createEmployeeSchema = joi.object({
    rfc,
    curp: curp.required(),
    fullname: fullname.required(),
    phone,
    email: email.required(),
    salary,
    user: joi.object({
        username: username.required(),
        password: password.required(),
        role: role.required()
    })
})

const updateEmployeeSchema = joi.object({
    rfc,
    curp,
    fullname,
    phone,
    email,
    salary,

})

const getEmployeeSchema = joi.object({
    id: id.required()
})

module.exports = {
    createEmployeeSchema,
    updateEmployeeSchema,
    getEmployeeSchema
}
