import SignInList from "./SignInList";
import "./result-screen.css";
function EmotionalIntuitive() {
  return (
    <div className="result-personality">
      <h1>You are a EMOTIONAL INTUITIVE!</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}communicator-result.jpg`}
        alt="start-screen-image"
      />
      <div>
        <p className="result-para para-1">
          While you may have other profiles at work, as an Emotional Intuitive
          you are someone who receives insight, wisdom and clarity through
          feelings.
        </p>
        <p className="result-para para-2">
          You understand life best through emotions and are able to feel deeply
          into who or what is around you. Your ability to connect emotionally
          with others is a powerful gift that allows you to accurately assess
          what is truly going on in the people or situations around you.
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
export default EmotionalIntuitive;
