import { useState } from "react";
import BooksPage from "./BooksPage";
import Homepage from "./Homepage";

const App = () => {
  const [showBooks, setShowBooks] = useState(false);

  return (
    <div className={`app ${showBooks ? "show-books" : ""}`}>
      <Homepage onClick={() => setShowBooks(true)} />
      <BooksPage />
    </div>
  );
};

export default App;
