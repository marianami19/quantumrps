import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/RoofMap.scss";

function RoofMap() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [mapData, setMapData] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [coordinates, setCoordinates] = useState(null);
  const [map, setMap] = useState(null); // Store the map instance

  useEffect(() => {
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

    if (address) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [address]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelectAddress = async (selected) => {
    setSelectedAddress(selected.description); // Set the description as the selected address
    setAddress(selected.description); // Update the input field with the selected suggestion
    setShowSuggestions(false);

    try {
      const geoResponse = await axios.get(
        `http://localhost:3306/geocode?place_id=${selected.place_id}`
      );

      const location = geoResponse.data.location;
      setCoordinates(location);

      // You can now use the coordinates to place markers on the map.
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  useEffect(() => {
    // Initialize the map and add a marker at the selected coordinates
    if (coordinates) {
      if (map) {
        map.remove(); // Remove the previous map instance
      }

      const newMap = L.map("map").setView(
        [coordinates.lat, coordinates.lng],
        15
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(newMap);
      L.marker([coordinates.lat, coordinates.lng]).addTo(newMap);

      // Store the new map instance
      setMap(newMap);
    }
  }, [coordinates]);

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
              onClick={() => handleSelectAddress(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}

      <div>
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      </div>
    </div>
  );
}

export default RoofMap;
