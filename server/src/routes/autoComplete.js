const express = require("express");
const router = express.Router();
const config = require("../../config"); 
const GOOGLE_API_KEY = config.googleApiKey;
const axios = require("axios");

// Endpoint for fetching autocomplete suggestions
router.get("/autocomplete", async (req, res) => {
  console.log("df")
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

  module.exports = router;