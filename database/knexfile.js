const { loadEnvConfig } = require("@next/env")

const dev = process.env.NODE_ENV !== "production"
const { DATABASE_URL } = loadEnvConfig("../", dev).combinedEnv
/**
 */
module.exports = {
  client: "postgresql",
  connection: DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
  debug: dev,
}
