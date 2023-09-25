import React, { useState } from "react";
import "../styles/RoofingCalculator.scss";

function RoofingCalculator() {
  // Define state variables for form inputs
  const [roofingMaterial, setRoofingMaterial] = useState("");
  const [needNewGutters, setNeedNewGutters] = useState(false);
  const [materialSubType, setMaterialSubType] = useState("");
  const [tearOffLayers, setTearOffLayers] = useState("");
  const [numberOfStories, setNumberOfStories] = useState(1);
  const [numberOfSkylights, setNumberOfSkylights] = useState(0);
  const [numberOfRidgeVents, setNumberOfRidgeVents] = useState(0);
  const [numberOfDormers, setNumberOfDormers] = useState(0);

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
  };

  return (
    <div className="roofing-calculator">
      <h2>Roofing Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Roofing Material</label>
          <select
            className="form-control"
            value={roofingMaterial}
            onChange={(e) => setRoofingMaterial(e.target.value)}
          >
            <option value="">Select Material</option>
            <option value="shingles">Shingles</option>
            <option value="tiles">Tiles</option>
            <option value="metal">Metal</option>
            <option value="fiberglass">Fiberglass</option>
            <option value="fibercement">Fiber Cement</option>
          </select>
        </div>

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

        <div className="form-group">
          <label>Material Sub Type</label>
          <select
            className="form-control"
            value={materialSubType}
            onChange={(e) => setMaterialSubType(e.target.value)}
          >
            <option value="">Select Sub Type</option>
            <option value="concrete">Concrete</option>
            <option value="clay">Clay</option>
            <option value="glazed">Glazed</option>
            <option value="slate">Slate</option>
            <option value="steel">Steel</option>
          </select>
        </div>

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

        <div className="form-group">
          <label>Number of Stories</label>
          <input
            type="number"
            className="form-control"
            value={numberOfStories}
            onChange={(e) => setNumberOfStories(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number of Skylights</label>
          <input
            type="number"
            className="form-control"
            value={numberOfSkylights}
            onChange={(e) => setNumberOfSkylights(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number of Ridge Vents</label>
          <input
            type="number"
            className="form-control"
            value={numberOfRidgeVents}
            onChange={(e) => setNumberOfRidgeVents(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number of Dormers</label>
          <input
            type="number"
            className="form-control"
            value={numberOfDormers}
            onChange={(e) => setNumberOfDormers(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default RoofingCalculator;
