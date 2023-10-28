import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Alert } from 'react-bootstrap';
import {
  faMagnifyingGlass, faRightLong, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import RoofingCalculator from "../components/RoofingCalculator";
import "../styles/RoofMap.scss";

function RoofMap() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [coordinates, setCoordinates] = useState({lat:  39.8283,  lng: -98.5795});  // Default center coordinates for the map (center of the US)
  const [map, setMap] = useState(null); // Store the map instance
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [squareFootArea, setSquareFootArea] = useState(null);
  const [currentStep, setCurrentStep] = useState("roofMap");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleBackClick = () => {
    if (currentStep === "roofingCalculator") {
      // Transition back to the Roof Map step
      setCurrentStep("roofMap");
      // You may also want to reset some state variables if needed
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `https://quantrps.onrender.com/autocomplete?input=${address}`
        );
        setSuggestions(response.data.predictions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setError('Error fetching data. Please try again.');
        setShowError(true);
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
    setAddress(selected.description);
    setShowSuggestions(false);

    try {
      const geoResponse = await axios.get(
        `https://quantrps.onrender.com/geocode?place_id=${selected.place_id}`
      );

      const location = geoResponse.data.location;
      setCoordinates(location);
      setIsDataAvailable(true); // Latitude and Longitude data is available
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setError('Error fetching data. Please try again.');
      setShowError(true);
    }
  };


  const handleNext = async () => {
    if (currentStep === "roofMap") {
      // Transition to the Roofing Calculator step
      // Continue with your existing logic to fetch solar data
      try {
        // Send a request to the backend endpoint to fetch solar data
        const solarResponse = await axios.get(
          `https://quantrps.onrender.com/solar-data?latitude=${coordinates.lat}&longitude=${coordinates.lng}`
        );

        // Extract the square foot area from the response
        const area = solarResponse.data.squareFootArea;
        setSquareFootArea(area);
        setCurrentStep("roofingCalculator");
        console.log(area)
        setSuccess("Data fetched successfully.");
        setShowSuccess(true); 
      } catch (error) {
        console.error('Error fetching square foot area:', error);
        setError('Data not available for the selected location. Please try another place.');
        setShowError(true);
      }
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

    <div id="roofing">
      {currentStep === "roofMap" && (
        <div className="container mb-5">

          <div className="row height d-flex justify-content-center align-items-center ">
            <h1 className="hero-title ">Calculate your Roofing Estimate</h1>
            <p className="hero-description">
              Type in your address and select your roof on the map
            </p>

            <div className="col-md-6">

              <div className="form">
                <FontAwesomeIcon className="fa-search" icon={faMagnifyingGlass} />
                <input type="text" className="form-control form-input" placeholder="Enter an address..." value={address}
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

            <div style={{ height: "400px", width: "100%" }}>
              {coordinates && coordinates.lat && coordinates.lng && <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAYfF58L0E5xVtlCNlspolj1RNSRJJY2SQ",
                }}
                defaultCenter={{
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                }}
                defaultZoom={4}
                onGoogleApiLoaded={({ map }) => setMap(map)}
                onClick={handleMapClick}
                options={(map) => ({ mapTypeId: map.MapTypeId.SATELLITE })}
              zoom={14}
              >
                <Marker
                  text="My home"
                  lat={coordinates.lat}
                  lng={coordinates.lng}
                // onClick={() => map.setCenter({ lat: coordinates.lat + Math.random(), lng: coordinates.lng + Math.random() })}
                />
              </GoogleMapReact>}
            </div>
          </div>
          {isDataAvailable &&
            <button className="btn btn-primary btn-lg" onClick={handleNext} >
              <FontAwesomeIcon icon={faRightLong} />
            </button>
          }

          <Alert variant="danger" show={showError && currentStep === "roofMap"} onClose={() => setShowError(false)} dismissible>
            {error}
          </Alert>
          <Alert variant="success" show={showSuccess && currentStep === "roofMap"} onClose={() => setShowSuccess(false)} dismissible>
            <FontAwesomeIcon icon={faCheckCircle} /> {success}
          </Alert>
        </div>
      )}

      {currentStep === "roofingCalculator" && (
        <RoofingCalculator onBackClick={handleBackClick} squareFootArea={squareFootArea}
        />
      )}
      {/* Display the error using the Alert component */}


    </div>
  );



}



export default RoofMap;
