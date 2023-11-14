const express = require("express");
const bodyParser = require("body-parser");
// const mysql = require("mysql");
const cors = require("cors"); // Import cors package
const app = express();
app.use(cors()); // Enable CORS for all routes
// const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Load routes and configurations
const dbConfig = require("./src/config/db"); 
const submitFormRoute = require("./src/routes/submitForm"); 
const viewDataRoute = require("./src/routes/viewData"); 
const autoComplete = require("./src/routes/autoComplete"); 
const geocode = require("./src/routes/geocode"); 
const roofArea = require("./src/routes/roofArea"); 
const triggerMail = require("./src/routes/triggerEmail"); 

// Set up routes
app.use(submitFormRoute);
app.use(viewDataRoute);
app.use(autoComplete);
app.use(geocode);
app.use(roofArea);
app.use(triggerMail);

const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
