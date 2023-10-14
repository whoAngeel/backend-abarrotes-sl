const { Pool } = require('pg');



const pool = new Pool({
    connectionString: URI
})

module.exports = pool
