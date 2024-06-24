import React from "react";
import "./signInList.css";

const SignInList = () => {
  return (
    <div className="sign-in-list">
      <div className="learn-more-section">
        <h2 className="learn-more-title">Want to learn more?</h2>
        <p className="result-para">
          Enter your email address below and my Discover Your Intuitive Style
          Report will be sent directly to your inbox. This report will give you
          more information on how you can create a stronger connection to your
          intuition. You will also receive information on upcoming events, blog
          posts, articles, and offerings.
        </p>
        <form>
          <label htmlFor="email">*Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="firstName">*First Name</label>
          <input type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div
          className="ctct-inline-form"
          data-form-id="9d74ea33-1e45-4cee-8de7-2fd103a68ba7"
        ></div>

        <a
          href="https://melodyraejones.local/the-expand-your-wisdom-offer/"
          className="get-toolkit-btn"
        >
          Get the Toolkit Access at the Special Price
        </a>
      </div>
    </div>
  );
};

export default SignInList;
