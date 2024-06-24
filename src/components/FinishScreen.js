import React from "react";
import Communicator from "./Communicator";
import EmotionalIntuitive from "./EmotionalIntuitive";
import PhysicalIntuitive from "./PhysicalIntuitive";
import Prophetic from "./Prophetic";
import Visionary from "./Visionary";

function FinishScreen({ scores }) {
  const resultComponent = () => {
    const maxScore = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    switch (maxScore) {
      case "Communicator":
        return <Communicator />;
      case "EmotionalIntuitive":
        return <EmotionalIntuitive />;
      case "PhysicalIntuitive":
        return <PhysicalIntuitive />;
      case "Prophetic":
        return <Prophetic />;
      case "Visionary":
        return <Visionary />;
      default:
        return <div>No results found.</div>;
    }
  };

  return <div className="result">{resultComponent()}</div>;
}

export default FinishScreen;
