import "./option.css";

function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.choices.map((choice, index) => (
        <button
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: { index, personalityType: choice.personalityType },
            })
          }
          className={`btn btn-choice ${index === answer ? "answer" : ""} }`}
          key={choice}
          disabled={answer !== null}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}
export default Options;
