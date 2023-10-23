/* eslint-disable react/prop-types */
import { useState } from "react";
import hand from "./assets/hand.png";

const Homepage = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLinkClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <main className="homepage">
      <section className={`left-side ${isClicked ? "move-left" : ""}`}>
        <h1 className="title">Books make us</h1>
        <h1 className="subtitle">better.</h1>
      </section>
      <section className={`right-side ${isClicked ? "move-right" : ""}`}>
        <a
          href="#"
          className="link"
          onClick={() => setIsClicked(handleLinkClick)}
        >
          Start here
        </a>
        <img src={hand} alt="hand pointing to a link" className="hand" />
      </section>
    </main>
  );
};

export default Homepage;
