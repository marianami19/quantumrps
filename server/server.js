const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); // Import cors package
const axios = require("axios");
const app = express();
app.use(cors()); // Enable CORS for all routes
// const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const GOOGLE_API_KEY = "AIzaSyCYzCrSsdlzoUUA2ly8ZhFDn8geSbSGaKc"; // Replace with your Google API Key

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

// Add a new route to handle GET requests for viewing all data
app.get("/view-data", (req, res) => {
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

// Route to fetch autocomplete predictions from Google Places API
app.get("/autocomplete", async (req, res) => {
  try {
    const { input } = req.query;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while fetching autocomplete predictions.",
    });
  }
});

// Endpoint for fetching autocomplete suggestions
app.get("/autocomplete", async (req, res) => {
  try {
    const input = req.query.input;

    // Make a request to the Google Places Autocomplete API with components=country:us
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:us&region=us&key=${GOOGLE_API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching autocomplete suggestions:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Endpoint for fetching solar measurements based on the selected address
app.get("/solar", async (req, res) => {
  try {
    const address = req.query.address;

    // Make a request to your solar measurement API (replace with your actual API)
    const response = await axios.get(
      `http://your-solar-api-url/solar?address=${address}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching solar data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Endpoint for fetching coordinates based on place_id
app.get("/geocode", async (req, res) => {
  try {
    const placeId = req.query.place_id;

    // Make a request to the Google Geocoding API
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`
    );

    const location = response.data.results[0].geometry.location;
    res.json({ location });
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
