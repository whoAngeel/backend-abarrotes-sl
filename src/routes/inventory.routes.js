const express = require('express');
const InventoryService = require('../services/inventory.service');
const validatorHandler = require('../middlewares/validator.handler');
const { queryProductSchema } = require('../schemas/product.schema');
const { updateStockProductSchema } = require('../schemas/inventory.schema');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');
const debug = require('debug')("api:products.router");

const router = express.Router()
const service = new InventoryService()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    validatorHandler(queryProductSchema, 'body'), async (req, res, next) => {
        try {
            const products = await service.findAll(req.query);
            res.json(products)
        } catch (error) {
            next(error)
        }
    })

router.patch('/edit',
    passport.authenticate('jwt', { session: false }),
    validatorHandler(updateStockProductSchema, 'body'), async (req, res, next) => {
    try {
        const product = await service.update(req.body);
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
})

module.exports = router