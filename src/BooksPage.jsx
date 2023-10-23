import { useState } from "react";
import Books from "./Books";
import Slider from "./Slider";
import logo from "./assets/logo.png";
import books from "./data";

const uniqueGenres = ["All", ...new Set(books.map((book) => book.genre))];
const allGenres = uniqueGenres.map((genre) => {
  const book = books.find((item) => item.genre === genre);
  return [genre, book ? book.icon : null];
});

const BooksPage = () => {
  const [booksItem, setBooksItems] = useState(books);
  const [genres] = useState(allGenres);

  const filterBooksByGenre = (genre) => {
    if (genre === "All") {
      setBooksItems(books);
    } else {
      const newBooks = books.filter((book) => book.genre === genre);
      setBooksItems(newBooks);
    }
  };
  

  return (
    <main className="books-page">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="head-title">Sofia</h1>
      </header>
      <Slider genres={genres} filterBooksByGenre={filterBooksByGenre} />
      <Books books={booksItem} />
    </main>
  );
};

export default BooksPage;
