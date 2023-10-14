const productRouter = require('./products.routes');
const categoryRouter = require('./categories.routes');
const { Router } = require('express');



function routerApi(app) {
    const router = Router()
    app.use('/api', router)
    router.use('/products', productRouter)
    router.use('/categories', categoryRouter)
}

module.exports = routerApi
