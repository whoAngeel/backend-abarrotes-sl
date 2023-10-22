require('dotenv').config();
const config = {
    env: process.env.NODE || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    apiKey: process.env.API_KEY,
}

module.exports = { config }
