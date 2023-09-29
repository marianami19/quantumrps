// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB (replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URL)
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema for form submissions
const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  squareFootage: Number,
});

// Create a MongoDB model
const Submission = mongoose.model("Submission", SubmissionSchema);

// Handle form submissions
app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, phone, squareFootage } = req.body;

    // Create a new submission document
    const submission = new Submission({ name, email, phone, squareFootage });

    // Save the submission to the database
    await submission.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
