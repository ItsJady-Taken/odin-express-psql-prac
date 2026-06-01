const {Pool}  = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.DB_HOST || "localhost", // or wherever the db is hosted
  user: process.env.DB_USER || "jady",
  database: process.env.DB_NAME || "top_users",
  password: process.env.DB_PASSWORD || "mypassword",
  port: process.env.DB_PORT || 5432 // The default port
});
