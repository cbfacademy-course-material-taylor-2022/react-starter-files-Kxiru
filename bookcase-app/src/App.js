import React, { useState } from "react";
// import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Search from "./components/Search";

const App = (props) => {
  const [books, setBooks] = useState(data);

  function addBook(title) {
    console.log(`The Book '${title}' was clicked`);
  }

  async function findBooks(value, page) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&f
ilter=paid-ebooks&print-type=books&projection=lite&startIndex=${page}&maxResults=10&orderBy=relevance`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <h2 style={{ fontFamily: "Verdana", color: "teal" }}>
                Welcome to the Bookcase App
              </h2>
              <Search findBooks={findBooks} />
              <BookList books={books} addBook={addBook} />
            </>
          }
        />
        <Route
          exact
          path="/bookcase"
          element={
            <>
              <Header />
              <h2 style={{ fontFamily: "Verdana", color: "teal" }}>
                Welcome to the Bookcase
              </h2>
              <Search findBooks={findBooks} />
              <BookList books={books} addBook={addBook} />
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              <Header />
              <Search findBooks={findBooks} />
              <About />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <BookList books={books} addBook={addBook} />;
