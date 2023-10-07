import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "../styles/RoofMap.scss"; // Import your SCSS file

function RoofMap() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [mapData, setMapData] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true); // Control visibility of suggestions

  useEffect(() => {
    // Function to fetch autocomplete suggestions
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3306/autocomplete?input=${address}`
        );
        setSuggestions(response.data.predictions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    // Fetch suggestions when the address input changes
    if (address) {
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions when the input is empty
    }
  }, [address]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setShowSuggestions(true); // Allow suggestions to be displayed when input changes
  };

  const handleSelectAddress = (selected) => {
    setSelectedAddress(selected);
    setAddress(selected); // Update the input field with the selected suggestion
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const handleShowMap = async () => {
    try {
      // Make an API request to fetch roof measurements using the selectedAddress
      const response = await axios.get(
        `http://localhost:3306/solar?address=${selectedAddress}`
      );
      // Store the map data in state
      setMapData(response.data);
    } catch (error) {
      console.error("Error fetching map data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an address"
        value={address}
        onChange={handleAddressChange}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelectAddress(suggestion.description)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleShowMap}>Show Map</button>

      {mapData && (
        <div>
          {/* Render the map using mapData */}
          {/* You can use a mapping library like Google Maps or Leaflet here */}
        </div>
      )}
    </div>
  );
}

export default RoofMap;
