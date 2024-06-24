import SignInList from "./SignInList";
import "./result-screen.css";
function Communicator() {
  return (
    <div className="result-personality">
      <h1>You are a COMMUNICATOR!</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}communicator-result.jpg`}
        alt="start-screen-image"
      />
      <div>
        <p className="result-para para-1">
          While you may have other profiles at work, as a Communicator you are
          someone who receives insight, wisdom and clarity through the spoken or
          written word.
        </p>
        <p className="result-para para-2">
          Words are important to you – you say what you mean, mean what you say
          and expect others to do the same. You hear what others do not, either
          through inner messages, or by picking up on the subtle nuances in what
          others are saying, thus allowing you to gain deeper insight and
          meaning into the situations around you.
        </p>
        <p className="result-para para-3">
          Most people have 2 main profiles that act as guiding forces within
          their life, which they use regularly, easily and consistently. The
          other profiles play a more supporting role, with only certain aspects
          appearing occasionally or as needed.
        </p>
        <p className="result-para para-4">
          The 5 Wisdom Profiles are <strong>Communicator</strong>,
          <strong>Prophetic</strong>,<strong>Visionary</strong>,{" "}
          <strong>Emotional</strong>
          <strong>Intuitive</strong> and  <strong>Physical Intuitive</strong>.
        </p>
      </div>
      <SignInList />
    </div>
  );
}
export default Communicator;
