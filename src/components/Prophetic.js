import SignInList from "./SignInList";
import "./result-screen.css";
function Prophetic() {
  return (
    <div className="result-personality">
      <h1>You are a PROPHETIC!</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}communicator-result-prophetic.jpg`}
        alt="start-screen-image"
      />
      <div>
        <p className="result-para para-1">
          While you may have other profiles at work, as a Prophetic you are
          someone who receives insight, wisdom and clarity through your thoughts
          and ideas.
        </p>
        <p className="result-para para-2">
          You have an instant sense of knowing – you don’t know how you know,
          you just know that you know. This allows you to quickly receive
          creative ideas, solutions and insights in response to what is going on
          around you.
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
export default Prophetic;
