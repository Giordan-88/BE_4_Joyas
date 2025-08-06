const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "joyas",
  password: "asdf1234",
  port: 5433,
});

module.exports = pool;
