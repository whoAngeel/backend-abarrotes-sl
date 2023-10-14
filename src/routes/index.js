const productRouter = require('./products.router');
const { Router } = require('express');



function routerApi(app) {
    const router = Router()
    app.use('/api', router)
    router.use('/products', productRouter)
}

module.exports = routerApi
