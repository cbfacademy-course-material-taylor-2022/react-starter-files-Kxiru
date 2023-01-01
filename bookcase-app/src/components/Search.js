import React from "react";
const Search = (props) => {
  const [keyword, setKeyword] = React.useState("");

  return (
    <form>
      {/* <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p> */}

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
};
export default Search;
