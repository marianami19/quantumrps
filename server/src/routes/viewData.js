const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");


// Add a new route to handle GET requests for viewing all data
router.get("/view-data", (req, res) => {
    // Get a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      // Define a query to retrieve all data from the "user_data" table
      const query = "SELECT * FROM user_data";
  
      connection.query(query, (err, results) => {
        connection.release(); // Release the connection back to the pool
  
        if (err) {
          console.error("Error fetching data from MySQL:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
  
        // Send the retrieved data as a JSON response
        res.status(200).json(results);
      });
    });
  });

  module.exports = router;