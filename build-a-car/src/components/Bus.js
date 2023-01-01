import React from "react";

export default function Bus() {
  let allWheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    allWheels.push(<Wheel />);
  }

  return (
    <>
      <h2>Hello, I am a Bus</h2>
      {allWheels}
    </>
  );
}
