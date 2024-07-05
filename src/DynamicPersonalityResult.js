import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./DynamicPersonalityResult.css";
import SignInList from "./components/SignInList";

function DynamicPersonalityResult({ personalityType }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const slug = personalityType.toLowerCase().replace(/ /g, "-");

    const apiUrl = `${appData.siteUrl}/wp-json/wp/v2/personality_type?slug=${slug}`;

    const headers = new Headers({
      "X-WP-Nonce": appData.nonce,
    });

    fetch(apiUrl, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setContent(data[0]); // Access the first element
        } else {
          console.error("No data found for personality type:", slug);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const getRandomColor = () => {
      const colors = ["#ff6347", "#ffeb3b", "#8bc34a", "#00bcd4", "#e91e63"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const confettiCount = 30;
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = getRandomColor();
      confettiContainer.appendChild(confetti);
    }

    document.body.appendChild(confettiContainer);

    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 5000);

    return () => {
      if (document.body.contains(confettiContainer)) {
        document.body.removeChild(confettiContainer);
      }
    };
  }, [personalityType]);

  if (!content) {
    return <div>Loading...</div>;
  }

  const featuredImageUrl = content.featured_media_url || "";

  const addClassesToParagraphs = (htmlString) => {
    const dom = new DOMParser().parseFromString(htmlString, "text/html");
    const paragraphs = dom.querySelectorAll("p");

    paragraphs.forEach((p, index) => {
      p.classList.add(`para-${index + 1}`);
    });

    return dom.body.innerHTML;
  };

  const modifiedContent = addClassesToParagraphs(content.content.rendered);

  return (
    <div className="result-personality">
      <h1 className="personality-title">You are {content.title.rendered}</h1>
      {featuredImageUrl && (
        <img
          className="personality-featured-image"
          src={featuredImageUrl}
          alt={content.title.rendered}
        />
      )}
      <div className="personality-content start-screen-text">
        {parse(modifiedContent)}
      </div>
      <SignInList />
    </div>
  );
}

export default DynamicPersonalityResult;
