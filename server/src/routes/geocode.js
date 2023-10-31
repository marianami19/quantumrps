const express = require("express");
const router = express.Router();
const config = require("../../config"); 
const GOOGLE_API_KEY = config.googleApiKey;
const axios = require("axios");

// Endpoint for fetching coordinates based on place_id
router.get("/geocode", async (req, res) => {
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

  module.exports = router;