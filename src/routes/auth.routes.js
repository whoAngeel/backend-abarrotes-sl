const { Router } = require('express');
const Joi = require('joi');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const router = Router()


const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})
/**
 * @openapi
 * /api/auth/login
 *      get:
 *          tags:
 *              -
 * */
router.get('/login', validatorHandler(loginSchema, 'body'),
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


module.exports = router
