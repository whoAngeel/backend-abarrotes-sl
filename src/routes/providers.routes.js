const validatorHandler = require('../middlewares/validator.handler');
const { Router } = require('express');
const ProvidersServices = require('../services/provider.service');
const { createProviderSchema, getProviderSchema, updateProviderSchema } = require('../schemas/provider.schema');

const router = Router()
const service = new ProvidersServices()

router.get('/', async (req, res, next) => {
    try {
        const providers = await service.findAll();
        res.json(providers)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
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
    validatorHandler(createProviderSchema, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body
            const rta = await service.create(data)
            res.status(200).json(rta)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
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
    validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.delete(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

module.exports = router
