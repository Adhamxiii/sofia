import { useState } from "react";
import all from "./assets/all.png";

const Book = ({ genre, icon, onClick, isSelected }) => {
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront(!isFront);
    onClick(genre);
  };

  const iconToRender = genre === "All" ? all : icon;

  return (
    <div
      onClick={handleFlip}
      className={`book-container ${isSelected === genre ? "active" : ""}`}
    >
      <div className={`bookCube ${isSelected === genre ? "front" : "side"}`}>
        <div className="face side">
          <p className="genre">{genre}</p>
          <img src={iconToRender} alt="icon-genre" className="book-icon" />
        </div>

        <div className="face front">
          <div className="front-container">
            <p className="genre_title">{genre}</p>
            <img
              src={iconToRender}
              alt="icon-genre"
              className="book-icon__front"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              viewBox="0 0 121 34"
              height="34"
            >
              <path
                fillRule="evenodd"
                fill="#000"
                d="M115.5 10.805h-34v.009l-1.479-.004c-6.492-.028-17.349-.075-19.051 4.661l-.183.511 5.017 5.013A7.494 7.494 0 0 1 60.5 33.791a7.494 7.494 0 0 1-5.304-12.796l5.016-5.012-.182-.514c-1.673-4.703-12.754-4.671-19.361-4.657l-1.169.002v-.009h-29H5.501A5 5 0 0 1 .5 5.808 4.999 4.999 0 0 1 5.501.811 4.998 4.998 0 0 1 10.5 5.808v3.997h30v.008h.166c6.863-.019 17.006-.045 19.834 4.362 2.825-4.437 12.786-4.393 19.526-4.365l.474.002v-.007h30V5.808a4.999 4.999 0 0 1 5-4.997 4.999 4.999 0 0 1 5.001 4.997 5 5 0 0 1-5.001 4.997zM9.5 5.808a4.003 4.003 0 0 0-3.999-3.997A4.004 4.004 0 0 0 1.5 5.808a4.004 4.004 0 0 0 4.001 3.997H9.5V5.808zm46.404 15.894a6.5 6.5 0 0 0 0 9.186 6.458 6.458 0 0 0 4.596 1.903 6.462 6.462 0 0 0 4.597-1.903 6.502 6.502 0 0 0 0-9.186L60.5 17.109l-4.596 4.593zM115.5 1.811c-2.205 0-4 1.793-4 3.997v3.997h4a4.003 4.003 0 0 0 3.999-3.997 4.003 4.003 0 0 0-3.999-3.997z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
