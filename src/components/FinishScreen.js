import React from "react";
import DynamicPersonalityResult from "../DynamicPersonalityResult";

function FinishScreen({ scores, personalityTypes }) {
  const resultComponent = () => {
    const maxScore = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    return (
      <DynamicPersonalityResult
        personalityType={maxScore}
        personalityTypes={personalityTypes}
      />
    );
  };

  return <div className="result">{resultComponent()}</div>;
}

export default FinishScreen;
