import React, { useState, Fragment } from "react";
import "../styles/RoofingCalculator.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRightLong, faLeftLong
} from '@fortawesome/free-solid-svg-icons';
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import back from "../assets/images/Back (Stroke).svg";
import next from "../assets/images/Next (Stroke).svg";
import calc from "../assets/images/calc.jpg";

function RoofingCalculator({ onBackClick, squareFootArea, selectedCoordinates }) {
  // Define state variables for form inputs
  const [step, setStep] = useState(1);
  const [roofingMaterial, setRoofingMaterial] = useState("shingles");
  const [needNewGutters, setNeedNewGutters] = useState(false);
  const [materialSubType, setMaterialSubType] = useState("3-tab");
  const [tearOffLayers, setTearOffLayers] = useState("");
  const [numberOfStories, setNumberOfStories] = useState(1);
  const [numberOfSkylights, setNumberOfSkylights] = useState(0);
  const [numberOfRidgeVents, setNumberOfRidgeVents] = useState(0);
  const [numberOfDormers, setNumberOfDormers] = useState(0);
  const [lowerRange, setLowerRange] = useState(0);
  const [upperRange, setUpperRange] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY.toString();

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };



  function calculateRoofingCost(
    roofingMaterial,
    roofingSubType,
    numberOfStories,
    numberOfSkylights,
    numberOfRidgeVents,
    numberOfDormers,
    needNewGutters
  ) {
    let baseCost = 0;
    console.log("roofingMaterial", squareFootArea);

    // Determine base cost based on roofing material and subtype
    switch (roofingMaterial) {
      case "shingles":
        switch (roofingSubType) {
          case "3-tab":
            baseCost = numberOfStories === 1 ? 6 : 8;
            break;
          case "aluminium":
          case "metal-shingle":
            baseCost = numberOfStories === 1 ? 12.5 : 14;
            break;
          case "architectural":
          case "asphalt":
          case "synthetic-comp":
            baseCost = numberOfStories === 1 ? 8 : 10;
            break;
          default:
            baseCost = 0; // Invalid subtype
        }
        break;

      case "tiles":
        baseCost = numberOfStories === 1 ? 12.5 : 14;
        break;
      case "metal":
        baseCost = numberOfStories === 1 ? 12.5 : 14;
        break;
      case "Fibre Cement":
        baseCost = numberOfStories === 1 ? 12.5 : 14;
        break;

      default:
        baseCost = 0; // Invalid material
    }

    // Additional costs for skylights, ridge vents, dormers, and gutters
    const skylightCost = numberOfSkylights * 500;
    const ridgeVentCost = numberOfRidgeVents * 250;
    const dormerCost = numberOfDormers * 250;
    const gutterCost = needNewGutters === "yes" ? 9 : 0;

    // Calculate the total cost
    const totalCost =
      baseCost + skylightCost + ridgeVentCost + dormerCost + gutterCost;
    console.log(totalCost)

    let finalTotal = totalCost * squareFootArea;
    return Math.round(finalTotal)
  }
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform calculations or submit data as needed
    // You can calculate the roofing cost based on the form inputs here
    // For now, let's log the form inputs to the console
    console.log({
      roofingMaterial,
      needNewGutters,
      materialSubType,
      tearOffLayers,
      numberOfStories,
      numberOfSkylights,
      numberOfRidgeVents,
      numberOfDormers,
    });

    const totalCost = calculateRoofingCost(
      roofingMaterial,
      materialSubType,
      numberOfStories,
      numberOfSkylights,
      numberOfRidgeVents,
      numberOfDormers,
      needNewGutters
    );
    console.log("Total Roofing Cost: $" + totalCost);
    console.log("Lower Range: $" + lowerRange.toFixed(2));
    console.log("Upper Range: $" + upperRange.toFixed(2));

    calculateRange(totalCost);

    setShowResults(true);
    nextStep();
  };

  // Function to calculate the lower and upper ranges
  function calculateRange(totalCost) {
    const lowerPercentage = 0.33; // 33%
    const upperPercentage = 0.5; // 50%

    // Calculate the lower and upper ranges
    const lower = totalCost + lowerPercentage * totalCost;
    const upper = totalCost + upperPercentage * totalCost;

    setLowerRange(lower);
    setUpperRange(upper);
  }

  // Function to update material subtype based on roofing material
  const updateMaterialSubType = (material) => {
    switch (material) {
      case "shingles":
        setMaterialSubType("3-tab");
        break;
      case "tiles":
        setMaterialSubType("concrete");
        break;
      case "metal":
        setMaterialSubType("aluminium");
        break;
      case "fiberglass":
        setMaterialSubType("corrugated");
        break;
      case "fibercement":
        setMaterialSubType("corrugated");
        break;
      default:
        setMaterialSubType("");
        break;
    }
  };
  const scrollToElement = () => {
    // Replace 'elementId' with the actual ID of the element you want to scroll to
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Fragment>
      <div id="roofing">

        <div className="container mapwrap fontf">
          <div className="d-flex  justify-content-center flex-margin flex-wrap">
            <div className="pe-5 d-flex flex-column">
              <h2 className="heading">Calculate your<br />Roofing Estimate</h2>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="">
                    <h4 className="subheading">
                      Type in your address and select<br /> your roof on the map
                    </h4>
                    <div>
                      <div className="">

                        <div className="">
                          <div className="form-group">
                            <label>Roofing Material</label>
                            <select
                              className="form-control"
                              value={roofingMaterial}
                              onChange={(e) => {
                                setRoofingMaterial(e.target.value);
                                updateMaterialSubType(e.target.value);
                              }}
                            >
                              <option value="shingles">Shingles</option>
                              <option value="tiles">Tiles</option>
                              <option value="metal">Metal</option>
                              <option value="fiberglass">Fiberglass</option>
                              <option value="fibercement">Fiber Cement</option>
                            </select>

                          </div>

                        </div>



                        <div className="">
                          <div className="form-group">
                            <label>Material Sub Type</label>
                            <select
                              className="form-control"
                              value={materialSubType}
                              onChange={(e) => setMaterialSubType(e.target.value)}
                            >
                              {roofingMaterial === "shingles" && (
                                <>
                                  <option value="3-tab">3-Tab Shingle</option>
                                  <option value="aluminium">Aluminium Shingle</option>
                                  <option value="architectural">
                                    Architectural Shingle
                                  </option>
                                  <option value="asphalt">Asphalt Shingle</option>
                                  <option value="metal-shingle">Metal Shingle</option>
                                  <option value="synthetic-comp">
                                    Synthetic Comp Shingle
                                  </option>
                                </>
                              )}
                              {roofingMaterial === "tiles" && (
                                <>
                                  <option value="concrete">Concrete</option>
                                  <option value="clay">Clay</option>
                                  <option value="glazed">Glazed</option>
                                  <option value="slate">Slate</option>
                                  <option value="steel">Steel</option>
                                </>
                              )}
                              {roofingMaterial === "metal" && (
                                <>
                                  <option value="aluminium">Aluminium Shingle</option>
                                  <option value="copper-panel">Copper Panel</option>
                                  <option value="corrugated">Corrugated</option>
                                  <option value="corrugated-aluminium">
                                    Corrugated Aluminium
                                  </option>
                                  <option value="ribbed">Ribbed</option>
                                  <option value="standard">Standard</option>
                                  <option value="steel-metal">Steel</option>
                                </>
                              )}
                              {roofingMaterial === "fiberglass" && (
                                <>
                                  <option value="corrugated">Corrugated</option>
                                </>
                              )}
                              {roofingMaterial === "fibercement" && (
                                <>
                                  <option value="corrugated">Corrugated</option>
                                  <option value="shake">Shake</option>
                                  <option value="slate-fibercement">Slate</option>
                                </>
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (

                  <div className="">
                    <h4 className="subheading">
                      Do You Need New Gutters?
                    </h4>

                    <div class="btn-group d-flex" style={{ width: "245.13px" }} data-toggle="buttons">

                      <label class="btn btn-outline-dark">
                        <input type="radio" name="YES" value="yes" id="yes" checked={needNewGutters === true}
                          onChange={() => setNeedNewGutters(true)} /> YES
                      </label>
                      <label class="btn btn-outline-dark">
                        <input type="radio" name="options" id="no" value="no"
                          checked={needNewGutters === false}
                          onChange={() => setNeedNewGutters(false)} /> NO
                      </label>

                    </div>

                  </div>
                )}
                {step === 3 && (

                  <div className="">
                    <h1 className="subheading">Tear Off, removal, and dumping<br /> of Old Roof?</h1>

                    <div className="form-group">
                      <select
                        className="form-control"
                        value={tearOffLayers}
                        onChange={(e) => setTearOffLayers(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes1">Yes, 1 Layer</option>
                        <option value="yes2">Yes, 2 Layers</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 4 && (

                  <div className="">
                    <h1 className="subheading">Number of ...</h1>

                    <div className="d-flex">
                      <div className="">
                        <label>Storeys</label>
                        <select
                          className="form-control nos-w me-2"
                          value={numberOfStories}
                          onChange={(e) => setNumberOfStories(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                      <div className="">
                        <label>Skylights</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control nos-w"
                          value={numberOfSkylights}
                          onChange={(e) => setNumberOfSkylights(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="">
                        <label>Ridge Vents</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control nos-w me-2"
                          value={numberOfRidgeVents}
                          onChange={(e) => setNumberOfRidgeVents(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <label>Dormers</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control nos-w"
                          value={numberOfDormers}
                          onChange={(e) => setNumberOfDormers(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}


              </form>
              {step === 5 && (
                <div className="results">
                  {showResults && (
                    <div className=" mt-3">
                      <p className="p-line">The total square footage of your<br /> roof is approximately
                        <div className="mt-2">  <strong>{Math.round(squareFootArea)} square feet</strong></div>
                      </p>
                      <p className="p-line">Your estimated cost for a new<br /> roof falls within the range of <div className="mt-2"><strong><span>${lowerRange}</span> to <span>${upperRange}</span></strong></div></p>
                    </div>
                  )}
                </div>
              )}
              <div className="d-flex justify-content-between mt-auto">

                {step === 1 && (
                  // <button className="btn btn-lg btn-secondary" onClick={onBackClick}>
                  //   <FontAwesomeIcon icon={faLeftLong} />
                  // </button>
                  <div className="calculate-button text-start">
                    <button
                      type="submit"
                      className="btn btn-outline-dark mt-3"
                      onClick={onBackClick}
                    >
                      <img src={back} alt=">" className="me-2" />
                      BACK
                    </button>
                  </div>
                )}
                {step > 1 && (
                  // <button className="btn btn-lg btn-secondary mx-2" onClick={prevStep}>
                  //   <FontAwesomeIcon icon={faLeftLong} />
                  // </button>
                  <div className="calculate-button text-start">
                    <button
                      type="submit"
                      className="btn btn-outline-dark mt-3"
                      onClick={prevStep}
                    >
                      <img src={back} alt=">" className="me-2" />
                      BACK
                    </button>
                  </div>
                )}
                {step < 4 && (
                  // <button className="btn btn-lg btn-primary mx-2" onClick={nextStep}>
                  //   <FontAwesomeIcon icon={faRightLong} />
                  // </button>
                  <div className="calculate-button text-start">
                    <button
                      type="submit"
                      className="btn btn-outline-dark mt-3"
                      onClick={nextStep}
                    >
                      NEXT
                      <img src={next} alt=">" className="ms-2" />
                    </button>
                  </div>
                )
                }
                {step === 4 && (
                  // <button className="btn btn-lg btn-primary mx-2" onClick={nextStep}>
                  //   <FontAwesomeIcon icon={faRightLong} />
                  // </button>
                  <div className="calculate-button text-start">
                    <button
                      type="submit"
                      className="btn btn-outline-dark mt-3 calc-p"
                      onClick={handleSubmit}
                    >
                      CALCULATE
                    </button>
                  </div>
                )
                }

              </div>
            </div>
            {step !== 5 && (
              <div
                className="mapsettings"
                style={{ height: "350px", width: "350px", marginTop: "10px" }}
              >
                {selectedCoordinates && (
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={{
                      lat: selectedCoordinates.lat,
                      lng: selectedCoordinates.lng,
                    }}
                    defaultZoom={20}
                    options={(map) => ({
                      draggable: false,
                      mapTypeId: map.MapTypeId.SATELLITE,
                      gestureHandling: "none", // Disable all gestures (pan, zoom, etc.)
                    })}
                  >
                    <Marker
                      text="Selected Location"
                      lat={selectedCoordinates.lat}
                      lng={selectedCoordinates.lng}
                    />
                  </GoogleMapReact>
                )}
              </div>)}


            {step === 5 && (
              <div
                className="mapsettings"
                style={{marginTop: "10px" }}
              >
                <div className="bg-End">

                  <h2 className="heading">Connect with our<br />experts</h2>
                  <p className="p-line">or</p>
                  <h2 className="heading">Get a Quote</h2>
                </div>
                  <div className="roof-button calc-img text-center">
                    <button onClick={scrollToElement} className="btn btn-light m-3">CONTACT US</button>
                  </div>
                {/* <img src={calc} alt="Quantum roofing" 
                style={{  width: "350px", marginTop: "10px" }}
                 />
                   */}

              </div>
            )}
          </div>


        </div>



      </div>

    </Fragment>
  );
}

export default RoofingCalculator;
