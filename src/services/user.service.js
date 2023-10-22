const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');
class UserService {
    constructor() { }

    async create(data) {
        const hash = await bcrypt.hash(data.password, 10)
        const newUser = await models.User.create({
            ...data,
            password: hash
        })
        delete newUser.dataValues.password
        return newUser
    }

    async findAll() {

        const users = await models.User.findAll({
            include: ['employee'],
            attributes: {
                exclude: ['password']
            }
        })

        return users
    }

    async findByUsername(username) {
        const rta = await models.User.findOne({
            where: {
                username
            },
        })
        return rta
    }

    async findOne(id) {
        const user = await models.User.findByPk(id, {
            include: ['employee']
        })
        if (!user) throw boom.notFound("Usuario no encontrado")
        return user
    }

    async update(id, changes) {
        const user = this.findOne(id)
        const newUser = (await user).update(changes)
        return {
            message: "Usuario actualizado",
            id: newUser.id
        }
    }

    async delete(id) {
        const user = this.findOne(id);
        (await user).destroy();
        return {
            message: "Usuario eliminado"
        }
    }
}

module.exports = UserService
