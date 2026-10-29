
import { useEffect, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import "./Intro.css";

const website = "Fatimah-sk.github.io";

function Intro({ onFinish }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 4500);

    let typingInterval;

    const startTimer = setTimeout(() => {
      let index = 0;

      typingInterval = setInterval(() => {
        index++;
        setTypedText(website.slice(0, index));

        if (index >= website.length) {
          clearInterval(typingInterval);
        }
      }, 85);
    }, 1500);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(startTimer);
      clearInterval(typingInterval);
    };
  }, [onFinish]);

  return (
    <div className="portfolio-intro">
      <div className="portfolio-intro-content">
        <p>WELCOME TO</p>

        <h1>
          FATIMAH'S
          <span> PORTFOLIO</span>
        </h1>

        <div className="portfolio-intro-line"></div>

        <div className="intro-website">
          <FiGlobe className="intro-globe" />

          <span className="intro-website-text">
            {typedText}
          </span>

          <span className="intro-cursor">|</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
