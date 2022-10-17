const knex = require('knex')({

    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '1234',
        database: 'query_knex'
    }

});



module.exports = knex;