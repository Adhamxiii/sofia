import React, { useState } from "react";
import Book from "./Book";

const Slider = ({ genres, filterBooksByGenre }) => {
  const [isSelected, setIsSelected] = useState("");

  const handleBookClick = (genre) => {
    filterBooksByGenre(genre);
    setIsSelected(genre);
  };

  return (
    <div className="slider">
      <div className="container">
        {genres.map(([genre, icon]) => (
          <Book
            key={genre}
            onClick={() => handleBookClick(genre)}
            genre={genre}
            icon={icon}
            isSelected={isSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
