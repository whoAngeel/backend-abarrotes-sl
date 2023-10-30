const { Router } = require('express');
const Joi = require('joi');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const UsersService = require('../services/user.service');

const router = Router()
const service = new UsersService()

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.post('/login', validatorHandler(loginSchema, 'body'),
    passport.authenticate('local', {
        session: false
    }),
    async (req, res, next) => {
        try {
            const user = req.user
            const payload = {
                sub: user.id,
                role: user.role,
            }
            const token = jwt.sign(payload, config.jwtSecret)
            res.json({
                user, token
            })
        } catch (error) {
            next(error)
        }
    })

router.get('/profile-user', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
        const user = req.user
        const id = user.sub
        const info = await service.findOne(id)
        delete info.dataValues.password
        res.json(info)
    } catch (error) {
        next(error)
    }
})

module.exports = router
