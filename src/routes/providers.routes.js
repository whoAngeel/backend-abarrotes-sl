const validatorHandler = require('../middlewares/validator.handler');
const { Router } = require('express');
const ProvidersServices = require('../services/provider.service');
const { createProviderSchema, getProviderSchema, updateProviderSchema } = require('../schemas/provider.schema');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const router = Router()
const service = new ProvidersServices()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    async (req, res, next) => {
        try {
            const providers = await service.findAll();
            res.json(providers)
        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    validatorHandler(getProviderSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const provider = await service.findOne(id)
            res.json(provider)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createProviderSchema, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body
            const rta = await service.create(data)
            res.status(201).json(rta)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getProviderSchema, 'params'),
    validatorHandler(updateProviderSchema, 'body'), async (req, res, next) => {
        try {
            const { id } = req.params
            const changes = req.body
            const rta = await service.update(id, changes)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getProviderSchema, 'params'), async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.delete(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

module.exports = router
