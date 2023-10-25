const { Router } = require("express");
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema,
    getUserSchema,
    updateUserSchema } = require('../schemas/user.schema');
const UserService = require('../services/user.service');
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");

const router = Router()
const service = new UserService()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    async (req, res, next) => {
        try {
            const users = await service.findAll()
            res.json(users)
        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const user = await service.findOne(id)
            res.json(user)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body
            const newUser = await service.create(body)
            res.status(201).json(newUser)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body
            const { id } = req.params
            const rta = await service.update(id, body)
            res.status(200).json(rta)
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.delete(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

module.exports = router
