import React from "react";
import Book from "./components/Book";
import data from "./models/books.json";

function App() {
  const [books] = React.useState(data);

  return books.map((book) => <Book book={book} />);
}

export default App;
