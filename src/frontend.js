import React, { useReducer } from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

document.addEventListener("DOMContentLoaded", function () {
  const divsToUpdate = document.querySelectorAll(".quiz-update");
  divsToUpdate.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    ReactDOM.render(<Quiz {...data} />, div);
    div.classList.remove("quiz-update");
  });
});

const initialState = {
  status: "ready",
  index: 0,
  scores: {
    Communicator: 0,
    Prophetic: 0,
    Visionary: 0,
    EmotionalIntuitive: 0,
    PhysicalIntuitive: 0,
  },
  answer: null,
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_QUESTION":
      return { ...state, questions: action.payload };
    case "START_QUIZ":
      return { ...state, status: "active" };
    case "newAnswer":
      const { personalityType } = action.payload;
      const newScores = { ...state.scores };
      if (personalityType in newScores) {
        newScores[personalityType] += 1; // Increment the score for the corresponding personality type
      }
      const nextIndex =
        state.index + 1 < state.questions.length
          ? state.index + 1
          : state.index;
      return {
        ...state,
        answer: null,
        index: state.index + 1,
        scores: newScores,
      };
    case "INIT_QUESTIONS":
      return { ...state, questions: action.questions };
    case "finish":
      return {
        ...state,
        status: "finish",
        index: state.questions.length,
      };

    default:
      throw new Error("Unhandled action");
  }
}

function Quiz(props) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    questions: props.questions,
  });

  function startClick() {
    dispatch({ type: "START_QUIZ" });
  }

  return (
    <div className="quiz-frontend">
      <Header />
      <main>
        {state.status === "ready" && (
          <StartScreen
            questionsLength={state.questions.length}
            dispatch={dispatch}
          />
        )}
        {state.status === "active" && state.index < state.questions.length && (
          <>
            <Progress
              index={state.index}
              numQuestions={state.questions.length}
              answer={state.answer}
              dispatch={dispatch}
            />
            <Question
              question={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.answer}
            />
          </>
        )}
        {state.index === state.questions.length && (
          <FinishScreen scores={state.scores} />
        )}
      </main>
    </div>
  );
}

export default Quiz;
