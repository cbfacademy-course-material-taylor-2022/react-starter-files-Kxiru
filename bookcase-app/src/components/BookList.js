import React from "react";
import Book from "./Book";

function BookList(props) {
  return props.books.map((book) => (
    <Book book={book} addBook={props.addBook} />
  ));
}

export default BookList;
