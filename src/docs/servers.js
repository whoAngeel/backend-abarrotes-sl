const { config } = require("../config/config");

module.exports = {
    servers: [
        {
            url: `http://localhost:${config.port}/api/`,
        },
        // {
        //     url: "http://localhost:3000/api/users",
        // },
        // {
        //     url: "http://localhost:3000/api/categories",
        // },
        // {
        //     url: "http://localhost:3000/api/providers",
        // },
        // {
        //     url: "http://localhost:3000/api/products",
        // },
        // {
        //     url: "http://localhost:3000/api/employees",
        // },
        // {
        //     url: "http://localhost:3000/api/sales",
        // },
    ]
}
