import "./startScreen.css";

function StartScreen({ questionsLength, dispatch }) {
  return (
    <div className="start">
      <h1 class="quiz-start-heading">What’s Your Wisdom Profile?</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}quiz_start_screen.jpg`}
        alt="start-screen-image"
      />

      <p className="start-screen-text">
        Your intuition is available everyday to help you navigate your best path
        forward. Through empowered actions, ‘best for you’ choices and informed
        life decisions, your inner wisdom is waiting for opportunities to guide
        you forward to create a life that you love.
      </p>
      <p className="start-screen-text">
        While everyone is intuitive, not everyone connects with their inner
        wisdom in the same way. So it’s important to be aware of your personal
        intuitive style, so you can more easily recognize, trust and follow the
        guidance you are receiving.
      </p>
      <p className="start-screen-text">
        <b>
          Take the WISDOM PROFILES QUIZ and discover your personal intuitive
          style, so you can expand your ability to be divinely, accurately and
          intuitively guided.
        </b>
      </p>
      <p className="start-screen-text">
        <i>
          “Wisdom is the deeper knowledge that you carry... intuition is the way
          in which you access it.”
        </i>
      </p>
      <p className="start-screen-text">
        <p className="instructions">
          <b>INSTRUCTIONS:</b>
        </p>
        <b>
          For each question, choose the answer(s) that feels true and right for
          you on a regular and consistent basis (not just sometimes or as you
          wish you were). By choosing what truly reflects who you are, you will
          be able to gain valuable insight into how your intuitive wisdom
          presents itself.
        </b>
      </p>
      <p className="start-screen-questions-length">
        Get your personality type by answering {questionsLength} questions.
      </p>
      <button
        className="start-screen-btn"
        onClick={() => dispatch({ type: "START_QUIZ" })}
      >
        DISCOVER YOUR PROFILE
      </button>
    </div>
  );
}
export default StartScreen;
