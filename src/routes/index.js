const productRouter = require('./products.router');

function routerApi(app) {
    app.use('/products', productRouter)
}

module.exports = routerApi
