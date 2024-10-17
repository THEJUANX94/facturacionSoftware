const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Sebastianmn03?',
    database: 'facturacion',
    port: '5433'
})

module.exports = {
    pool
}