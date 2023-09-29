import React from "react";
import "../styles/RoofMeasurementInstructions.scss";

const steps = [
  {
    title: "Safety First",
    description:
      "Ensure your ladder is stable and take precautions for your safety.",
  },
  {
    title: "Starting Point",
    description: "Begin at any corner or edge of your roof.",
  },
  {
    title: "Length First",
    description:
      "Use the measuring tape to find the distance from the roof's edge (overhang) to its peak (highest point). This gives you the length.",
  },
  {
    title: "Then Width",
    description:
      "Measure from one side of the roof to the other, perpendicular to your first measurement. This gives you the width.",
  },
  {
    title: "Square Footage",
    description:
      "If your roof is simple, you can multiply the length by the width to get the square footage. If your roof has different sections, repeat this step for each section and add them together.",
  },
  {
    title: "Overhangs",
    description:
      "If your roof has parts that stick out (overhangs), measure them separately and subtract that area from your total.",
  },
  {
    title: "Roof Features",
    description:
      "For things like chimneys, skylights, or dormers, measure them and subtract their area from the total too.",
  },
  {
    title: "Pitch or Slope",
    description:
      "Note how steep or flat your roof is. This might affect the amount of materials you need.",
  },
];

const StepByStepInstructions = () => {
  return (
    <div id="roofingStepsContainer">
      <h2>Measure Your Roof Tips</h2>
      <div className="step-by-step-instructions">
        {steps.map((step, index) => (
          <div className="instruction-card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepInstructions;
