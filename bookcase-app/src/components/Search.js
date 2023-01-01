import React from "react";

const Search = (props) => {
  const [keyword, setKeyword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.findBooks(keyword);
  }

  return (
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
  );
};
export default Search;
