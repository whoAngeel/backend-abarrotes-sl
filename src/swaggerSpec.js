const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { config } = require('./config/config');
const debug = require('debug')('api:swaggerSpec');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Rest para la tienda de abarrotes sanluis",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000/api/auth",
            },
            {
                url: "http://localhost:3000/api/users",
            },
            {
                url: "http://localhost:3000/api/categories",
            },
            {
                url: "http://localhost:3000/api/providers",
            },
        ]
    },
    apis: [`src/routes/index.js`,
        'src/routes/auth.routes.js',
        'src/routes/categories.routes.js', 'src/routes/employees.routes.js', 'src/routes/products.routes.js', 'src/routes/sales.routes.js', 'src/routes/users.routes.js']
}

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    })

    debug(`📃Docs available at http://localhost:${config.port}/api/docs`)
}

module.exports = {
    swaggerDocs
}

/// docs en json format
