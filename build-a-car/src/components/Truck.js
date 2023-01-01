import React from "react";

export default function Truck() {
  let allWheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    allWheels.push(<Wheel />);
  }

  return (
    <>
      <h2>Good Morning, I am a Truck</h2> {allWheels}
    </>
  );
}
