const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); // Import cors package

const app = express();
app.use(cors()); // Enable CORS for all routes
// const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a MySQL connection pool (configure with your MySQL details)
const pool = mysql.createPool({
  host: "bnycrniwlveaoqkdiygk-mysql.services.clever-cloud.com", // If your MySQL server is on the same machine
  user: "u0efstyvunl4hfey", // Replace with your MySQL username (usually "root" for XAMPP)
  password: "LSZH7PTkHUYnnmrhpKAH", // Leave it empty if you haven't set a password for your MySQL server in XAMPP
  database: "bnycrniwlveaoqkdiygk", // Replace with your database name
});

app.post("/submit-form", (req, res) => {
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

const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
