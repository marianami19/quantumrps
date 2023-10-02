import React, { useState } from "react";
import "../styles/RoofingCalculator.scss";
import RangePopup from ".././RangePopup";

function RoofingCalculator() {
  // Define state variables for form inputs
  const [roofingMaterial, setRoofingMaterial] = useState("shingles");
  const [needNewGutters, setNeedNewGutters] = useState(false);
  const [materialSubType, setMaterialSubType] = useState("3-tab");
  const [tearOffLayers, setTearOffLayers] = useState("");
  const [numberOfStories, setNumberOfStories] = useState(1);
  const [numberOfSkylights, setNumberOfSkylights] = useState(0);
  const [numberOfRidgeVents, setNumberOfRidgeVents] = useState(0);
  const [numberOfDormers, setNumberOfDormers] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [lowerRange, setLowerRange] = useState(0);
  const [upperRange, setUpperRange] = useState(0);
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
    console.log("roofingMaterial", roofingSubType);

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
      case "metal":
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
    const gutterCost = needNewGutters === "Yes" ? 9 : 0;

    // Calculate the total cost
    const totalCost =
      baseCost + skylightCost + ridgeVentCost + dormerCost + gutterCost;

    return totalCost;
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

    calculateRange(totalCost);

    console.log("Lower Range: $" + lowerRange.toFixed(2));
    console.log("Upper Range: $" + upperRange.toFixed(2));

    setShowPopup(true);
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
    <div id="roofing">
      <div className="roofing-calculator">
        {/* <h2 className="mb-4">Step 2: Fill this Form</h2> */}
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
          <label>Total Square Footage:</label>
          <input
            type="number"
            name="totalSquareFootage"
            min="0"
            placeholder="Enter total square footage"
            value={totalSquareFootage}
            onChange={(e) => setTotalSquareFootage(e.target.value)}
          />
        </div> */}

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

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Do You Need New Gutters?</label>
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
            <div className="col-md-6">
              <div className="form-group">
                <label>Tear Off, Removal, and Dumping of Old Roof?</label>
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

          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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
            <div className="col-md-3">
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

          <button type="submit" className="btn btn-lg btn-primary my-5">
            Calculate Roofing Estimate
          </button>
        </form>

        {/* Conditionally render the popup */}
        {showPopup && (
          <RangePopup
            isOpen={showPopup}
            onRequestClose={() => setShowPopup(false)}
            lowerRange={lowerRange}
            upperRange={upperRange}
          />
        )}
      </div>
    </div>
  );
}

export default RoofingCalculator;
