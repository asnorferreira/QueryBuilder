import knex from "knex";

const knexInstance = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "24102002",
    database: "knextest",
  },
});

export default knexInstance;
