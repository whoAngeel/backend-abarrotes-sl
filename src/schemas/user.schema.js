const joi = require('joi');
const validRoles = ["admin", "employee", "dev"];

const id = joi.number().integer().min(1)
const username = joi.string().alphanum().min(3).max(100)
const password = joi.string().min(3).max(12)
const role = joi.string().min(3).max(12).valid(...validRoles)
const email = joi.string().email()

const createUserSchema = joi.object({
    username: username.required(),
    password: password.required(),
    role: role.required(),
})

const updateUserSchema = joi.object({
    username,
    password,
    role,
})

const getUserSchema = joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}
