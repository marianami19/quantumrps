import React from "react";
import "../styles/RoofMeasurementInstructions.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
const steps = [
  {
    title: "Safety First",
    description:
      "Ensure your ladder is stable and take precautions for your safety.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Starting Point",
    description: "Begin at any corner or edge of your roof.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Length First",
    description:
      "Use the measuring tape to find the distance from the roof's edge (overhang) to its peak (highest point). This gives you the length.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Then Width",
    description:
      "Measure from one side of the roof to the other, perpendicular to your first measurement. This gives you the width.",
    // icon: `fa-solid fa-check-square"`,
  },
  {
    title: "Square Footage",
    description:
      "If your roof is simple, you can multiply the length by the width to get the square footage. If your roof has different sections, repeat this step for each section and add them together.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Overhangs",
    description:
      "If your roof has parts that stick out (overhangs), measure them separately and subtract that area from your total.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Roof Features",
    description:
      "For things like chimneys, skylights, or dormers, measure them and subtract their area from the total too.",
    // icon: "fa-solid fa-check-square",
  },
  {
    title: "Pitch or Slope",
    description:
      "Note how steep or flat your roof is. This might affect the amount of materials you need.",
    // icon: `fa-solid fa-check-square`,
  },
];

const StepByStepInstructions = () => {
  return (
    <div id="roofingStepsContainer" className="pb-5">
      <h2 className="my-5">Measure Your Roof Tips</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
            <div className="instruction-card">
              <div className="instruction-content">
                <div className="instruction-icon">
                <FontAwesomeIcon icon={faCheckSquare} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepInstructions;
