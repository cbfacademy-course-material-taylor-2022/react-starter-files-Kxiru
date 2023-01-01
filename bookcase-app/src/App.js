import React, { useState } from "react";
// import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";

const App = (props) => {
  const [books] = useState(data);

  function addBook(title) {
    console.log(`The Book '${title}' was clicked`);
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
              <h2>Welcome to the Bookcase App</h2>
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
              <h2>Welcome to the Bookcase</h2>
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
