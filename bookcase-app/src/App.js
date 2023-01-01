import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";

const App = (props) => {
  const [books] = useState(data);

  function addBook(title) {
    console.log(`The Book '${title}' was clicked`);
  }

  return <BookList books={books} addBook={addBook} />;
};
export default App;
