import React from "react";

const Book = (props) => {
  return (
    <div key={props.book.volumeInfo.title}>
      {/* Code below displays the book title */}
      <h2>{props.book.volumeInfo.title}</h2>
      <h4>{props.book.volumeInfo.authors}</h4>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
      <h4>
        Price:{" "}
        {props.book.saleInfo.listPrice
          ? props.book.saleInfo.listPrice.amount
          : "None Provided"}
      </h4>
      <hr></hr>
    </div>
  );
};
export default Book;
