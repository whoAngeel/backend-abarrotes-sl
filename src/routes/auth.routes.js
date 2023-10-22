const { Router } = require('express');
const Joi = require('joi');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');

const router = Router()

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.get('/login', validatorHandler(loginSchema, 'body'),
    passport.authenticate('local', {
        session: false
    }),
    async (req, res, next) => {
        try {
            const user = req.user
            res.json(user)
        } catch (error) {
            next(error)
        }
    })


module.exports = router
