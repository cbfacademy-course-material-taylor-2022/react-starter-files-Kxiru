import React, { useState } from "react";

const ClickCounter = () => {
  const buttonStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "coral",
    color: "#fff",
    borderStyle: "none",
  };
  const unClickButtonStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "red",
    color: "#fff",
    borderStyle: "none",
  };
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 style={{ color: "blue" }}>Count: {count}</h2>
      <div>Click the button below to increment the counter</div>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Click!
      </button>

      <button style={unClickButtonStyle} onClick={() => setCount(count - 1)}>
        UnClick!
      </button>
    </div>
  );
};

export default ClickCounter;
