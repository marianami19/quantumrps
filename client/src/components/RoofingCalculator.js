import React, { useState, useCallback, Fragment } from "react";
import "../styles/RoofingCalculator.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRightLong, faLeftLong
} from '@fortawesome/free-solid-svg-icons';

function RoofingCalculator({ onBackClick, squareFootArea }) {
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

  return (
    <Fragment>
      <div id="roofing">

        <div className="roofing-calculator">
          <form onSubmit={handleSubmit}>


            {step === 1 && (
              <div className="row  d-flex justify-content-center align-items-center">
                <h1 className="hero-title">What roofing material do you prefer?</h1>
                <p className="hero-description">
                  Select the material of your choice
                </p>
                <div style={{ height: "200px", width: "100%" }}>
                  <div className="row">

                    <div className="col-md-6">
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



                    <div className="col-md-6">
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

              <div className="row  d-flex justify-content-center align-items-center">
                <h1 className="hero-title">Do You Need New Gutters?</h1>
                <p className="hero-description">
                  Select your preference
                </p>
                <div style={{ height: "200px", width: "100%" }}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group text-center">
                        {/* <label>Do You Need New Gutters?</label> */}
                        <div>
                          <label className="radio-inline">
                            <input
                              type="radio"
                              value="yes"
                              checked={needNewGutters === true}
                              onChange={() => setNeedNewGutters(true)}
                            />
                            Yes
                          </label>
                          <label className="radio-inline">
                            <input
                              type="radio"
                              value="no"
                              checked={needNewGutters === false}
                              onChange={() => setNeedNewGutters(false)}
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (

              <div className="row  d-flex justify-content-center align-items-center">
                <h1 className="hero-title">Tear Off, Removal, and Dumping of Old Roof?</h1>
                <p className="hero-description">
                  We got that covered too!
                </p>
                <div style={{ height: "200px", width: "100%" }}>
                  <div className="row">


                    <div className="col-md-12">
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
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (

              <div className="row  d-flex justify-content-center align-items-center">
                <h1 className="hero-title">A little more about your roof...</h1>
                <p className="hero-description">
                  Number of ...
                </p>
                <div style={{ height: "200px", width: "100%" }}>
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="form-group">
                        <label>Storeys</label>
                        <select
                          className="form-control"
                          value={numberOfStories}
                          onChange={(e) => setNumberOfStories(e.target.value)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="form-group">
                        <label>Skylights</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control"
                          value={numberOfSkylights}
                          onChange={(e) => setNumberOfSkylights(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="form-group">
                        <label>Ridge Vents</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control"
                          value={numberOfRidgeVents}
                          onChange={(e) => setNumberOfRidgeVents(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="form-group">
                        <label>Dormers</label>
                        <input
                          type="number"
                          min="0"
                          className="form-control"
                          value={numberOfDormers}
                          onChange={(e) => setNumberOfDormers(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </form>

          {step === 5 && (
            <div className="">
              <h1 className="hero-title">Finally...</h1>
              <p className="hero-description">
                Hit the button to calculate your estimate
              </p>
                <button className="btn btn-lg btn-primary" onClick={handleSubmit}>
                  Calculate Roofing Estimate
                </button>
              <div style={{ height: "200px", width: "100%" }}>
                { showResults && (
                  <div>
                    <p>The total square footage of your roof is approximately <strong>{Math.round(squareFootArea)} square feet</strong>.</p>
                    <p>Your estimated cost for a new roof falls within the range of <strong>${lowerRange} to ${upperRange}</strong>.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 1 && (
            <button className="btn btn-lg btn-secondary" onClick={onBackClick}>
              <FontAwesomeIcon icon={faLeftLong} />
            </button>
          )}

          {step > 1 && (
            <button className="btn btn-lg btn-secondary mx-2" onClick={prevStep}>
              <FontAwesomeIcon icon={faLeftLong} />
            </button>
          )}
          {step < 5 && (
            <button className="btn btn-lg btn-primary mx-2" onClick={nextStep}>
              <FontAwesomeIcon icon={faRightLong} />
            </button>
          )
          }
          {/* Conditionally render the popup */}
        </div>
      </div>





    </Fragment>
  );
}

export default RoofingCalculator;
