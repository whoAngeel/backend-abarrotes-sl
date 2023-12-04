const express = require('express');
const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, getProductSchema, updateProductSchema, queryProductSchema, getProdSchema } = require('../schemas/product.schema');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');
const Joi = require('joi');
const debug = require('debug')("api:products.router");

const router = express.Router()
const service = new ProductsService()

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    validatorHandler(queryProductSchema, 'query'), async (req, res, next) => {
        try {
            const products = await service.findAll(req.query);
            res.json(products)
        } catch (error) {
            next(error)
        }
    })

router.post('/search',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'employee'),
    validatorHandler(getProductSchema, 'body'), async (req, res, next) => {
        try {
            const product = await service.findBy(req.body);
            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
        try {
            const body = req.body;
            const newProduct = await service.create(body)
            res.status(201).json(newProduct)
        } catch (error) {
            next(error)
        }
    })

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getProdSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const updatedProduct = await service.update(id, body)
            res.json(updatedProduct)
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.delete(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
        try {
            const { id } = req.params
            const rta = await service.findOne(id)
            res.json(rta)
        } catch (error) {
            next(error)
        }
    })

router.get("/buscar", passport.authenticate('jwt', { session: false }),
    checkRoles('admin'),
    validatorHandler(Joi.object({ name: Joi.string() }), 'body'), async (req, res, next) => {
        try {
            const { name } = req.body
            const rta = await service.searchByName(name)
            return rta
        } catch (error) {
            next(error)
        }
    })

module.exports = router
