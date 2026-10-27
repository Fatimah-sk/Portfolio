import { useEffect, useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import "./Typewriter.css";

const technologies = [
  { name: "HTML", icon: SiHtml5},
  { name: "CSS", icon: FaCss3Alt},
  { name: "JavaScript", icon: SiJavascript},
  { name: "React", icon: SiReact},
  { name: "Node.js", icon: SiNodedotjs},
];

function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = technologies[wordIndex];
  const Icon = current.icon;

  useEffect(() => {
    let delay = isDeleting ? 65 : 120;

    if (!isDeleting && text === current.name) {
      delay = 1200;
    }

    if (isDeleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === current.name) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % technologies.length);
      } else {
        setText(
          current.name.slice(
            0,
            text.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, current.name]);

  return (
    <div className="hero-typewriter">
      <span className="hero-tech-icon-wrapper">
        <Icon
            size={24}
            color={current.color}
            className="hero-tech-icon"
        />
        </span>

      <span
        className="hero-typed-text"
        style={{ color: current.color }}
      >
        {text}
      </span>

      <span className="hero-typing-cursor"></span>
    </div>
  );
}

export default Typewriter;
