
const Books = ({books}) => {
  return (
    <div className="book-store">
      <header className="store-header">
        <h1>My Books</h1>
      </header>

      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">Author: {book.author}</p>
            <p className={`book-genre genre-${book.genre.toLowerCase()}`}>
              Genre: {book.genre}
            </p>
            <p className="book-description">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
