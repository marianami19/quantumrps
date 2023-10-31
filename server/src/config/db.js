// Create a MySQL connection pool (configure with your MySQL details)

const mysql = require("mysql");

const pool = mysql.createPool({
    host: "bnycrniwlveaoqkdiygk-mysql.services.clever-cloud.com", // If your MySQL server is on the same machine
    user: "u0efstyvunl4hfey", // Replace with your MySQL username (usually "root" for XAMPP)
    password: "LSZH7PTkHUYnnmrhpKAH", // Leave it empty if you haven't set a password for your MySQL server in XAMPP
    database: "bnycrniwlveaoqkdiygk", // Replace with your database name
  });

  module.exports = pool;