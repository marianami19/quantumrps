import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/RoofMap.scss";
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

function RoofMap() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [coordinates, setCoordinates] = useState(null);
  const [map, setMap] = useState(null); // Store the map instance
  const [clickedCoordinates, setClickedCoordinates] = useState(null);

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

  const handleMapClick = ({ x, y, lat, lng, event }) => {
    // Capture the clicked point's coordinates
    setClickedCoordinates({ lat, lng });
    console.log(lat)
    console.log(lng)
    console.log('lng')
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

      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYfF58L0E5xVtlCNlspolj1RNSRJJY2SQ' }}
          defaultCenter={{
            lat: coordinates ? coordinates.lat : 0,
            lng: coordinates ? coordinates.lng : 0,
          }}
          defaultZoom={17}
          onGoogleApiLoaded={({ map }) => setMap(map)}
          onClick={handleMapClick} // Capture click events
          options={map => ({ mapTypeId: map.MapTypeId.SATELLITE })}
        >
          {coordinates && (
            <LocationPin
              lat={coordinates.lat}
              lng={coordinates.lng}
              text={selectedAddress}
            />
          )}

          {clickedCoordinates && (
            <MarkerPin
              lat={clickedCoordinates.lat}
              lng={clickedCoordinates.lng}
            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const MarkerPin = () => (
  <div className="marker-pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
);

export default RoofMap;
