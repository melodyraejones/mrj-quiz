import SignInList from "./SignInList";
import "./result-screen.css";
function PhysicalIntuitive() {
  return (
    <div className="result-personality">
      <h1>You are a PHYSICAL INTUITIVE!</h1>
      <img
        className="start-screen-img"
        src={`${appData.imagesUrl}communicator-result.jpg`}
        alt="start-screen-image"
      />
      <div>
        <p className="result-para para-1">
          While you may have other profiles at work, as a Physical Intuitive you
          are someone who receives insight, wisdom and clarity through physical
          sensations.
        </p>
        <p className="result-para para-2">
          You feel the world through your physical body, and gain valuable
          insights about the people and situations in your life by tuning into
          how your body feels (heavy, energized, chills, tired, etc.). You want
          the freedom to be yourself and express who you are, and the
          independence to create environments that feels right or best for you.
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
export default PhysicalIntuitive;
