import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";

const App = (props) => {
  const [books] = useState(data);
  return books.map((book) => <Book key={book.id} book={book} />);
};
export default App;
