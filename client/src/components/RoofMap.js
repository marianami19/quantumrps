import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker"
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

import "../styles/RoofMap.scss";
function RoofMap() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [coordinates, setCoordinates] = useState(null);
  const [map, setMap] = useState(null); // Store the map instance

  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [squareFootArea, setSquareFootArea] = useState(null);

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
    setSelectedAddress(selected.description);
    setAddress(selected.description);
    setShowSuggestions(false);

    try {
      const geoResponse = await axios.get(
        `http://localhost:3306/geocode?place_id=${selected.place_id}`
      );

      const location = geoResponse.data.location;
      setCoordinates(location);
      setIsDataAvailable(true); // Latitude and Longitude data is available
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };


  const handleNextClick = async () => {
    try {
      // Send a request to the backend endpoint to fetch solar data
      const solarResponse = await axios.get(
        `http://localhost:3306/solar-data?latitude=${coordinates.lat}&longitude=${coordinates.lng}`
      );

      // Extract the square foot area from the response
      const area = solarResponse.data.squareFootArea;
      setSquareFootArea(area);
    } catch (error) {
      console.error('Error fetching square foot area:', error);
    }
  };

  const handleMapClick = ({ x, y, lat, lng, event }) => {
    setCoordinates({ lat, lng });
  };

  useEffect(() => {
    if (coordinates) {
      if (map) {
        map.panTo({ lat: coordinates.lat, lng: coordinates.lng });
      }
    }
  }, [coordinates, map]);

  return (

    <div>
      <div class="container">

        <div class="row height d-flex justify-content-center align-items-center">

          <div class="col-md-6">

            <div class="form">
              <FontAwesomeIcon className="fa-search" icon={faMagnifyingGlass} />
              <input type="text" class="form-control form-input" placeholder="Enter an address..." value={address}
                onChange={handleAddressChange} />
              {showSuggestions && suggestions.length > 0 && (
               <ul className="list-group">
               {suggestions.map((suggestion) => (
                 <li
                   key={suggestion.place_id}
                   onClick={() => handleSelectAddress(suggestion)}
                   className="list-group-item list-group-item-action"
                 >
                   {suggestion.description}
                 </li>
               ))}
             </ul>
             
              )}


              
            </div>


          </div>

      <div  style={{ height: "400px", width: "100%" }}>
        {coordinates && coordinates.lat && coordinates.lng && <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAYfF58L0E5xVtlCNlspolj1RNSRJJY2SQ",
          }}
          defaultCenter={{
            lat: coordinates.lat,
            lng: coordinates.lng,
          }}
          defaultZoom={17}
          onGoogleApiLoaded={({ map }) => setMap(map)}
          onClick={handleMapClick}
          options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
          zoom={10}
        >
          <Marker
            text="My home"
            lat={coordinates.lat}
            lng={coordinates.lng}
            onClick={() => map.setCenter({ lat: coordinates.lat + Math.random(), lng: coordinates.lng + Math.random() })}
          />
        </GoogleMapReact>}
      </div>
        </div>
      <button  className="btn btn-primary btn-lg" onClick={handleNextClick} disabled={!isDataAvailable}>
        Next
      </button>
      {squareFootArea && (
        <div>
          Square Foot Area: {squareFootArea} sqft
        </div>
      )}
 

      </div>



    </div>
  );
}



export default RoofMap;
