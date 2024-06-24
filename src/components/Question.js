import Options from "./Options";
//styles
import "./question.css";
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4 class="quiz-question">{question.question}</h4>
      <img
        className="start-screen-img"
        src={question.imageUrl}
        alt="question-image"
      />
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
export default Question;
