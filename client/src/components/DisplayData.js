import React, { useState, useEffect } from "react";
import Axios from "axios"; // Import Axios for making HTTP requests

function DisplayData() {
  // Initialize state to store retrieved data
  const [data, setData] = useState([]);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      // Make a GET request to retrieve data
      const response = await Axios.get(
        "https://quantrps.onrender.com/view-data"
      );

      if (response.status === 200) {
        // Update the state with the retrieved data
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>View Saved Data</h2>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            {/* Display data properties as needed */}
            Name: {item.name}, Email: {item.email}, Phone: {item.phone}, Square
            Footage: {item.squareFootage}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DisplayData;
