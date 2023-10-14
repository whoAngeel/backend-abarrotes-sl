const path = require('path');

module.exports = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Rest para la tienda de abarrotes sanluis",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
}
