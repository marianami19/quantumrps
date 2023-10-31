
const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

router.post("/submit-form", (req, res) => {
    const formData = req.body;
    console.log("in", req.body);
  
    // Get a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      // Insert the formData into the database using named placeholders
      const query =
        "INSERT INTO user_data (name, email, phone, squareFootage) VALUES (?, ?, ?, ?)";
      const values = [
        formData.name,
        formData.email,
        formData.phone,
        formData.squareFootage,
      ];
  
      connection.query(query, values, (err, results) => {
        connection.release(); // Release the connection back to the pool
  
        if (err) {
          console.error("Error inserting data into MySQL:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
  
        console.log("Form data saved to MySQL:", results);
        res.status(200).json({ message: "Form submitted successfully!" });
      });
    });
  });
  


  module.exports = router;