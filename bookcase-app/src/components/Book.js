import React from "react";

const Book = (props) => {
  Book.defaultProps = {
    saleInfo: {
      retailPrice: {
        amount: "No price provided",
      },
    },
  };

  function addBook(title) {
    console.log(`The Book
'${title}' was clicked`);
  }

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
      </h4>{" "}
      <button onClick={() => addBook(props.book.volumeInfo.title)}>
        Add +
      </button>
      <hr></hr>
    </div>
  );
};
export default Book;
