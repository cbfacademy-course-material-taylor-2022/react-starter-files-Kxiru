import React from "react";

export default function Bicycle() {
  let allWheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    allWheels.push(<Wheel />);
  }

  return (
    <>
      <h2>good Morning, I am a Bicycle</h2>;{allWheels}
    </>
  );
}
