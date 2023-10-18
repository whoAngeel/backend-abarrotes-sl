const validatorHandler = require('../middlewares/validator.handler');
const { Router } = require('express');
const SaleService = require('../services/sale.service');
const { createSaleSchema, getSaleSchema } = require('../schemas/sale.schema');

const router = Router()
const service = new SaleService()

router.get('/', async (req, res, next) => {
    try {
        const sales = await service.find()
        res.json(sales)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getSaleSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const sale = await service.findOne(id)
            res.json(sale)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validatorHandler(createSaleSchema, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body
            const newSale = await service.create(data)
            res.json(newSale)

        } catch (error) {
            next(error)
        }
    })

// TODO hacer el endpoint para agregar un item
router.post('/add-item', async (req, res, next) => {
    try {
        const body = req.body
        // const newitem = await.service.
    } catch (error) {
        next(error)
    }
})


module.exports = router
