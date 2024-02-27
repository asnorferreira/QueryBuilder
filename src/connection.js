import knex from 'knex';

export const knexI = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '24102002',
        database: 'knexjs'
    }
});
