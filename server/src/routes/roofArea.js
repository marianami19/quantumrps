const express = require("express");
const router = express.Router();
const config = require("../../config"); 
const GOOGLE_API_KEY = config.googleApiKey;
const axios = require("axios");

// Endpoint for fetching coordinates based on place_id

router.get('/solar-data', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const solarResponse = await axios.get(
      `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${latitude}&location.longitude=${longitude}&requiredQuality=HIGH&key=${GOOGLE_API_KEY}`
    );

    console.log("solarPotential.maxArrayAreaMeters2", solarResponse.data.solarPotential.maxArrayAreaMeters2 * 10.764)
    const wholeRoofStats = solarResponse.data.solarPotential.wholeRoofStats.areaMeters2 

    // console.log('api data',wholeRoofStats)

    // Constants for estimation
    const averageSlopeHeight = 2.5;  // Estimate the average slope height in meters
    const averageSlopeWidth = 4.0;   // Estimate the average slope width in meters

    // Sloped Roof Area (Sum of Slope Areas)
    // const slopeSegments = solarResponse.data.solarPotential['roofSegmentStats'];
    // let sumSlopeArea = 0;
    // console.log(slopeSegments.length)

    // const x = await slopeSegments.forEach((segment) => {
    //   const pitchDegrees = segment.pitchDegrees;

    //   // Estimating the width and height of the sloped segment
    //   const pitchRadians = pitchDegrees * (Math.PI / 180);
    //   const halfSlopeHeight = averageSlopeHeight / 2;
    //   const halfSlopeWidth = halfSlopeHeight / Math.tan(pitchRadians);

    //   // Calculate the area based on the estimated width and height
    //   const slopeArea = 2 * halfSlopeHeight * halfSlopeWidth;

    //   sumSlopeArea += slopeArea;
    // });

    // Total Roof Area
    // const totalRoofArea = wholeRoofStats + sumSlopeArea;
    const totalRoofArea = wholeRoofStats * 10.764;

    console.log(`Total Roof Area: ${totalRoofArea} square meters`);

    res.json({ squareFootArea: totalRoofArea });
  } catch (error) {
    // console.error('Error fetching solar data:', error);
    res.status(500).json({ error: 'Could not fetch solar data' });
  }
});


  module.exports = router;