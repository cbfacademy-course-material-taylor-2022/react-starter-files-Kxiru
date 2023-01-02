import React from "react";

const Search = (props) => {
  const [keyword, setKeyword] = React.useState("");
  const [page, setPage] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    props.findBooks(keyword, page);
  }

  function refreshPage(event, num) {
    event.preventDefault();
    setPage(page + num);
    props.findBooks(keyword, page);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p> */}

        <input
          type="text"
          value={props.keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: 10, width: "75%" }}
        ></input>
        <button style={{ padding: 10, marginLeft: 20 }}>Submit</button>
      </form>
      <div style={{ display: "inline", color: "blue", textAlign: "center" }}>
        <span
          onClick={(e) => refreshPage(e, -10)}
          style={{ padding: 10, margin: 15, textDecoration: "underline" }}
        >
          Previous Page
        </span>{" "}
        <span
          onClick={(e) => refreshPage(e, 10)}
          style={{ padding: 10, margin: 15, textDecoration: "underline" }}
        >
          Next Page
        </span>
      </div>
    </>
  );
};
export default Search;
