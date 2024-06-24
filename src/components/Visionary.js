import SignInList from "./SignInList";
import "./result-screen.css";
function Visionary() {
  return (
    <div className="result-personality">
      <h1>You are a VISIONARY!</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}communicator-visionary.jpg`}
        alt="start-screen-image"
      />
      <div>
        <p className="result-para para-1">
          While you may have other profiles at work, as a Visionary you are
          someone who receives insight, wisdom and clarity through your inner
          and outer visions.
        </p>
        <p className="result-para para-2">
          You are able to visualize in great detail, often having vivid or
          prophetic dreams. You see details, patterns or new perspective that
          others often miss, and can easily see in your mind’s eye how things
          can fit, work or come together.
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
export default Visionary;
