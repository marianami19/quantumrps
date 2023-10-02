import React, { useState } from "react";
import "../styles/RoofingCalculator.scss";

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

    // Determine base cost based on roofing material and subtype
    switch (roofingMaterial) {
      case "shingles":
        switch (roofingSubType) {
          case "3-Tab Shingle":
            baseCost = numberOfStories === 1 ? 6 : 8;
            break;
          case "Aluminium Shingle":
          case "Metal Shingle":
            baseCost = numberOfStories === 1 ? 12.5 : 14;
            break;
          case "Architectural Shingle":
          case "Asphalt Shingle":
          case "Synthetic Comp Shingle":
            baseCost = numberOfStories === 1 ? 8 : 10;
            break;
          default:
            baseCost = 0; // Invalid subtype
        }
        break;

      case "tiles":
      case "Metal":
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
    // console.log({
    //   roofingMaterial,
    //   needNewGutters,
    //   materialSubType,
    //   tearOffLayers,
    //   numberOfStories,
    //   numberOfSkylights,
    //   numberOfRidgeVents,
    //   numberOfDormers,
    // });
    // roofingMaterial,
    // roofingSubType,
    // numberOfStories,
    // numberOfSkylights, numberOfRidgeVents, numberOfDormers, needNewGutters;

    // Example usage:
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
  };

  // const setCosting = () => {

  //     if(no of  storey = 1) {

  //       1) shingles
  //     -3-Tab Shingle  = 6
  //     -Aluminium Shingle = 12.5
  //     -Architectural Shingle = 8
  //     -Asphalt Shingle = 6
  //     -Metal Shingle = 12.5
  //     -Synthetic Comp Shingle = 8

  //  2) tiles
  //     -Concrete = 	12.5
  //     -Clay = 	12.5
  //     -glazed = 	12.5
  //     -slate = 	12.5
  //     -steel	= 12.5

  //     3) Metal
  //     -Aluminium Shingle =	12.5
  // 	-Copper Panel =	12.5
  // 	-Corrugated	= 12.5
  // 	-Corrugated = Aluminium	12.5
  // 	-ribbed	= 12.5
  // 	-standard 	= 12.5
  // 	-steel	= 12.5

  //   4)Fibre Cement
  // 	-Corrugated	= 12.5
  // 	-Shake	= 12.5
  // 	-Slate	= 12.5
  //     }
  //     else if ( no of storey=  2) {

  //       1) shingles
  //     -3-Tab Shingle  = 8
  //     -Aluminium Shingle = 14
  //     -Architectural Shingle = 10
  //     -Asphalt Shingle = 8
  //     -Metal Shingle = 14
  //     -Synthetic Comp Shingle = 8

  //  2) tiles
  //     -Concrete = 	14
  //     -Clay = 	14
  //     -glazed = 	14
  //     -slate = 	14
  //     -steel	= 14

  //     3) Metal
  //     -Aluminium Shingle =	14
  // 	-Copper Panel =	14
  // 	-Corrugated	= 14
  // 	-Corrugated = Aluminium	14
  // 	-ribbed	= 14
  // 	-standard 	= 14
  // 	-steel	= 14

  //   4)Fibre Cement
  // 	-Corrugated	= 14
  // 	-Shake	= 14
  // 	-Slate	= 14

  //     }

  //     Number of stories	can be either 1 or 2

  //     No. of Skylights		add 500 each
  // No. of Ridge vents		add 250 each
  // Number of Dormers Add 250 Each
  //     Do you need new gutters =	Yes	= 9

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
                    <option value="architectural">Architectural Shingle</option>
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
              <label>Stories</label>
              <input
                type="number"
                min="0"
                className="form-control"
                value={numberOfStories}
                onChange={(e) => setNumberOfStories(e.target.value)}
              />
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

        <button type="submit" className="btn btn-primary my-5">
          Calculate Roofing Estimate
        </button>
      </form>
    </div>
  );
}

export default RoofingCalculator;
