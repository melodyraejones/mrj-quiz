import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./DynamicPersonalityResult.css";
import SignInList from "./components/SignInList";

function DynamicPersonalityResult({ personalityType }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const slug = personalityType.toLowerCase().replace(/ /g, "-");
    const apiUrl = `https://melodyraejones.com/shop/wp-json/wp/v2/personality_type/${slug}`;

    const headers = new Headers({
      "X-WP-Nonce": appData.nonce,
    });

    console.log("API URL:", apiUrl); // Debug log
    console.log("Headers:", headers); // Debug log

    fetch(apiUrl, { headers })
      .then((response) => {
        console.log("API Response Status:", response.status); // Debug log
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Data:", data); // Debug log
        if (data) {
          setContent(data);
        } else {
          setError("No data found for the specified personality type.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
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

  if (error) {
    return <div>Error: {error}</div>;
  }

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

  const modifiedContent = addClassesToParagraphs(content.content);

  return (
    <div className="result-personality">
      <h1 className="personality-title">{content.title}</h1>
      {featuredImageUrl && (
        <img
          className="personality-featured-image"
          src={featuredImageUrl}
          alt={content.title}
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
