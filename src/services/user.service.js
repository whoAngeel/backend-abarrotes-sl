const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UserService {
    constructor() { }

    async create(data) {
        const newUser = await models.User.create(data)
        return newUser
    }

    async findAll() {
        const users = await models.User.findAll({
            include: ['employee']
        })
        return users
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
