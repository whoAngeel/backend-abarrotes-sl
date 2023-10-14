const productRouter = require('./products.routes');
const categoryRouter = require('./categories.routes');
const ProviderRouter = require('./providers.routes');
const { Router } = require('express');



function routerApi(app) {
    const router = Router()
    app.use('/api', router)
    router.use('/products', productRouter)
    router.use('/categories', categoryRouter)
    router.use('/providers', ProviderRouter)
}

module.exports = routerApi
