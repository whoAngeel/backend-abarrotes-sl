const { Strategy } = require("passport-local");
const UserService = require('../../../services/user.service');
const boom = require("@hapi/boom");
const { compare } = require("bcrypt");

const service = new UserService()

const LocalStrategy = new Strategy({
    usernameField: 'username',
    passwordField: "password"
}, async (username, password, done) => {
    try {
        if (username === "" && password === "") done(boom.badData(), false)
        const user = await service.findByUsername(username)
        if (!user) {
            done(boom.unauthorized(), false)
        }
        // user.password
        const isMatch = await compare(password, user.password)
        if (!isMatch) {
            done(boom.unauthorized(), false)
        }
        delete user.dataValues.password
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})

module.exports = LocalStrategy
