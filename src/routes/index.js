const productRouter = require('./products.routes');
const categoryRouter = require('./categories.routes');
const ProviderRouter = require('./providers.routes');
const UsersRouter = require('./users.routes');
const EmployeesRouter = require('./employees.routes');
const { Router } = require('express');



function routerApi(app) {
    const router = Router()
    app.use('/api', router)
    router.use('/products', productRouter)
    router.use('/categories', categoryRouter)
    router.use('/providers', ProviderRouter)
    router.use('/users', UsersRouter)
    router.use('/employees', EmployeesRouter)
}

module.exports = routerApi
