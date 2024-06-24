import "./progress.css";
import { useEffect } from "react";
function Progress({ index, numQuestions, answer, dispatch }) {
  useEffect(() => {
    // Check if we're at the last question and an answer has been provided
    if (index + 1 === numQuestions && answer !== null) {
      dispatch({ type: "finish" });
    }
  }, [index, numQuestions, answer, dispatch]);

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question:<strong>{index + 1}</strong>/{numQuestions}
      </p>
    </header>
  );
}
export default Progress;
